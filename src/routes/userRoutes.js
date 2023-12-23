import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.create);

export default router;

/*

    index -> Lista todos os usuários (GET)
    store/create -> Cria um novo usuário (POST)
    update -> Atualiza um usuário (PUT)
    delete -> Apaga um usuário (DELETE)
    show -> Mostra um usuário (GET)

*/