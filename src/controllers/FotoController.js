import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('arquivo');

class FotoController {

    async store(req, res) {

        try {
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
    
                res.json(foto);
            });
        } catch (error) {
            console.log(`DEU RUIM:`, error);
            return res.status(404).json({
                errors: [`O aluno não existe`]
            })
        }
    }

}

export default new FotoController();