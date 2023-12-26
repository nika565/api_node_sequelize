import Aluno from  '../models/Aluno';

class AlunoController {

    async index(req, res) {

        const alunos = await Aluno.findAll( { attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] } );

        res.json(alunos);
    }

}

export default new AlunoController();