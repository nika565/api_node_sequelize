import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('arquivo');

class FotoController {

    async store(req, res) {

        return upload(req, res, async (error) => {

            if (error) {
                return res.status(400).json({
                    errors: [error.code]
                });
            }

            const { originalname, filename } = req.file;
            const { aluno_id } = req.body;
            console.log(req.body);
            const foto = await Foto.create({ originalname, filename, aluno_id });

            res.json(req.file);
        });
    }

}

export default new FotoController();