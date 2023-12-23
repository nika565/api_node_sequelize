import dotenv from 'dotenv';
dotenv.config();

import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {

    async store(req, res) {

        try {

            const { email = '', password = '' } = req.body;

            if (!email || !password) return res.status(401).json({
                errors: ['Credenciais inválidas']
            });

            const user = await User.findOne({ where: { email } });

            if (!user) return res.status(404).json({
                errors: ['Usuário não existe']
            });

            if(!await user.passwordisValid(password)) return res.status(401).json({
                errors: ['Senha inválida']
            });

            // gerando o token de autenticação
            const { id } = user;
            const segredo = process.env.TOKEN_SECRET;
            const expiracao = process.env.TOKEN_EXPIRATION
            const token = jwt.sign({id, email}, segredo, {
                expiresIn: expiracao
            })

            return res.status(500).json({ token });

        } catch (error) {
            console.log(error);
            return res.status(500).json(null);

        }

    }

}

export default new TokenController();