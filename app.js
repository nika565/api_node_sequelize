import dotenv from 'dotenv';
dotenv.config();


// Iniciando conexão com o banco de dados
import './src/database/conn'

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

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
        this.app.use('/users/', userRoutes);
        this.app.use('/tokens/', tokenRoutes);
        this.app.use('/alunos/', alunoRoutes);
        this.app.use('/fotos/', fotoRoutes);
    }
}

export default new App().app;