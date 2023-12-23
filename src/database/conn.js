import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

// Instancia do sequelize passando o objeto de configuração
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));