import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

// Herdando as propriedades da classe Model presente no sequelize
export default class Foto extends Model {

    static init(sequelize) {

        // usando o método init da classe "pai"
        super.init({
            originalname: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: `Campo não pode ficar vazio.`
                    }
                }
            },

            filename: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: `Campo não pode ficar vazio.`
                    }
                }
            },

            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`
                }
            }

        }, {
            sequelize,
            tableName: 'fotos'
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    }

}