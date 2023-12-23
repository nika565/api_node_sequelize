import Aluno from  '../models/Aluno';

class HomeController {

    async index(req, res) {

        const novoAluno = await Aluno.create({
            nome: `Nathan`,
            sobrenome: `de Sousa Barros`,
            email: `nathan@email.com`,
            idade: 20,
            peso: 100.8,
            altura: 1.83
        });

        res.json({ novoAluno });
    }

}

export default new HomeController();