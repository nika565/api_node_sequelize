import User from '../models/User';

class UserController {

    async create(req, res) {

        try {

            const novoUser = await User.create(req.body);

            return res.json({ novoUser });

        } catch (error) {
            res.status(400).json( { errors: error.errors.map(err => err.message) } )
        }

    }


    // Index
    async index(req, res) {

        try {

            const users = await User.findAll();

            return res.json(users);
            
        } catch (error) {
            return res.status(500).json(null);
        }

    }

    // Show
    async show(req, res) {

        try {

            const user = await User.findByPk(req.params.id);

            return res.json(user);
            
        } catch (error) {
            return res.status(500).json(null);
        }

    }

    // Update
    async update(req, res) {

        try {

            if (!req.params.id) return res.status(404).json({errors: ['Nenhum usuário encontrado']});

            const user = await User.findByPk(req.params.id);
            const novosDados = await user.update(req.body);

            return res.json(novosDados);
            
        } catch (error) {
            console.log("\n\nDEU RUIM:", error);
            return res.status(500).json(null);
        }

    }

    // Delete
    async delete(req, res) {

        try {

            if (!req.params.id) return res.status(404).json({errors: ['Nenhum usuário encontrado']});

            const user = await User.findByPk(req.params.id);

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