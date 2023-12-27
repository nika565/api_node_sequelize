import Sequelize, { Model } from "sequelize";

// Herdando as propriedades da classe Model presente no sequelize
export default class Aluno extends Model {

    static init(sequelize) {

        // usando o método init da classe "pai"
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: `Nome precisa ter entre 3 e 255 caracteres.`
                    }
                }
            },

            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: `Sobrenome precisa ter entre 3 e 255 caracteres.`
                    }
                }
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: `E-mail inválido`
                    }
                }
            },

            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: `Idade precisa um número ineteiro`
                    }
                }
            },

            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: `Peso precisa um número inteiro ou de ponto flutuante`
                    }
                }
            },

            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: `Altura precisa um número inteiro ou de ponto flutuante`
                    }
                }
            }

        }, {
            sequelize,
        });

        return this;
    }

}