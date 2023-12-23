import dotenv from 'dotenv';
dotenv.config();


// Iniciando conexão com o banco de dados
import './src/database/conn'

import express from 'express';
import homeRoutes from './src/routes/homeRoutes'

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {

        // Configuração para analisar o corpo das solicitações
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());

    }

    routes() {
        this.app.use('/', homeRoutes);
    }
}

export default new App().app;