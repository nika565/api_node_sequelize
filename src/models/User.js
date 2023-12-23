import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcrypt';

// Herdando as propriedades da classe Model presente no sequelize
export default class User extends Model {

    static init(sequelize) {

        // usando o método init da classe "pai"
        super.init({

            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: `Campo nome deve ter entre 3 e 255 caracteres.`
                    }
                }
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: `O e-mail já existe.`
                },
                validate: {
                    isEmail: {
                        msg: `E-mail inválido.`
                    }
                }
            },

            password_hash: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 16],
                        msg: `Campo nome deve ter entre 6 e 16 caracteres.`
                    }
                }
            }

        }, {
            sequelize,
        });

        // Antes de salvar, a senha será criptografada
        this.addHook('beforeSave', async user => {

            if (user.password) user.password_hash = await bcrypt.hash(user.password, 10);

        });

        return this;
    }

    passwordisValid(password) {
        return bcrypt.compare(password, this.password_hash)
    }

}