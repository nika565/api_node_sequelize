import User from '../models/User';

class UserController {

    async create(req, res) {

        try {

            const novoUser = await User.create(req.body);

            const { id, nome, email } = novoUser;

            return res.json({ id, nome, email });

        } catch (error) {
            res.status(400).json( { errors: error.errors.map(err => err.message) } )
        }

    }


    // Index
    async index(req, res) {

        try {

            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
            console.log('\n\nUSER ID: ', req.userId);
            console.log('\n\nUSER E-MAIL: ', req.userEmail);

            return res.json(users);
            
        } catch (error) {
            return res.status(500).json(null);
        }

    }

    // Show
    async show(req, res) {

        try {

            const user = await User.findByPk(req.params.id);

            const { id, nome, email } = user;

            return res.json({ id, nome, email });
            
        } catch (error) {
            return res.status(500).json(null);
        }

    }

    // Update
    async update(req, res) {

        try {

            if (!req.userId) return res.status(404).json({errors: ['Nenhum usuário encontrado']});

            const user = await User.findByPk(req.userId);
            const novosDados = await user.update(req.body);

            const { id, nome, email } = novosDados;

            return res.json({ id, nome, email });
            
        } catch (error) {
            console.log("\n\nDEU RUIM:", error);
            return res.status(500).json( { msg: `deu ruim.` } );
        }

    }

    // Delete
    async delete(req, res) {

        try {

            if (!req.userId) return res.status(404).json({errors: ['Nenhum usuário encontrado']});

            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(404).json({
                    errors: [`Usuário não existe`]
                });
            }

            await user.destroy();
            return res.status(200).json(user);
            
        } catch (error) {
            console.log("\n\nDEU RUIM:", error);
            return res.status(500).json(null);
        }

    }

}

export default new UserController();