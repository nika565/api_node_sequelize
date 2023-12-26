// dotenv para variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config();

// Middleware de autenticação
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {

    // Buscando token do cabeçalho da request
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({
        errors: ["Precisa fazer login"]
    });

    const [ bearer, token ] = authorization.split(" ");

    try {

        // Verificação do token

        const segredo = process.env.TOKEN_SECRET;

        const dados = jwt.verify(token, segredo);

        const { id, email } = dados;

        const user = await User.findOne({
            where: {
                id,
                email
            }
        });

        // Verificando se os dados do token batem com o usuário no banco de dados
        if (!user) return res.status(401).json({ errors: ['Usuário inválido'] });

        req.userId = id;
        req.userEmail = email;

        return next();
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            errors: ['Token expirado ou inválido']
        });
    }

}