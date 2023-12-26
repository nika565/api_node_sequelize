import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', UserController.create);
router.get('/', loginRequired, UserController.index);
router.get('/:id', UserController.show);
router.put('/', loginRequired, UserController.update);
router.delete('/', UserController.delete);

export default router;

/*

    index -> Lista todos os usuários (GET)
    store/create -> Cria um novo usuário (POST)
    update -> Atualiza um usuário (PUT)
    delete -> Apaga um usuário (DELETE)
    show -> Mostra um usuário (GET)

*/