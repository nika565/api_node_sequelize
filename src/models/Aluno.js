import Sequelize, { Model } from "sequelize";

// Herdando as propriedades da classe Model presente no sequelize
export default class Aluno extends Model {

    static init(sequelize) {

        // usando o método init da classe "pai"
        super.init({
            nome: Sequelize.STRING,

            sobrenome: Sequelize.STRING,

            email: Sequelize.STRING,

            idade: Sequelize.INTEGER,

            peso: Sequelize.FLOAT,

            altura: Sequelize.FLOAT

        }, {
            sequelize,
        });

        return this;
    }

}