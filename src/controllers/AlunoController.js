import Aluno from  '../models/Aluno';

class AlunoController {

    async index(req, res) {

        const alunos = await Aluno.findAll( { attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] } );

        res.json(alunos);
    }

    async store (req, res) {

        try {

            console.log(req.body)

            const aluno = await Aluno.create(req.body);

            return res.status(200).json(aluno);

            
        } catch (error) {
            return res.status(500).json({ errors: error.errors.map(err => err.message) })
        }

    }

    async update (req, res) {
        try {

            if (!req.params.id) return res.status(400).json({ errors: ['Faltando o id'] });

            const aluno = await Aluno.findByPk(req.params.id);

            if (!aluno) return res.status(404).json({ errors: ['Aluno não existe'] });

            const alunoAtualizado = await aluno.update(req.body);

            return res.status(200).json(alunoAtualizado);

            
        } catch (error) {
            console.log(`\n\nVISH DEU RUIM PARCEIRO:`, error)
            res.status(400).json( { errors: error.errors.map(err => err.message) } )
        }
    }

    async show (req, res) {
        try {

            if (!req.params.id) return res.status(400).json({ errors: ['Faltando o id'] });

            const aluno = await Aluno.findByPk(req.params.id);

            if (!aluno) return res.status(404).json({ errors: ['Aluno não existe'] });

            return res.status(200).json(aluno);

            
        } catch (error) {
            return res.status(500).json({ errors: error.errors.map(err => err.message) })
        }
    }

    async delete (req, res) {
        try {

            if (!req.params.id) return res.status(400).json({ errors: ['Faltando o id'] });

            const aluno = await Aluno.findByPk(req.params.id);

            if (!aluno) return res.status(404).json({ errors: ['Aluno não existe'] });

            await aluno.destroy();
            return res.status(200).json({apagado: true});

            
        } catch (error) {
            return res.status(500).json({ errors: error.errors.map(err => err.message) })
        }
    }

}

export default new AlunoController();