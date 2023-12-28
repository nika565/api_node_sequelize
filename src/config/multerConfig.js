import multer from "multer";
import { extname, resolve } from 'path';

// Função para gerar nome aleatório para o aqruivo salvo
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {

    // Salvar no disco dentro do servidor
    storage: multer.diskStorage({

        destination: (req, file, cb) => {

            // Verificação de qual tipo de arquivo esta sendo enviado antes de salvar
            if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
                return cb(new multer.MulterError(`Arquivo precisa ser png ou jpeg`), false);
            }

            // Você também pode verificar a extensão do arquivo
            // const ext = extname(file.originalname);
            // if (ext !== '.png' && ext !== '.jpeg') {
            //     return cb(new multer.MulterError(`Arquivo precisa ser png ou jpeg`));
            // }

            console.log(`Testando 2`)
            /*
                Callback parâmetros:
                    1. Erro
                    2. Caminho de pastas onde vai salvar os arquivos
            */
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },

        filename: (req, file, cb) => {
            console.log('Testando 3')
            /*
                Callback parâmetros:
                    1. Erro
                    2. Nome pesonalizado do arquivo (É interessante que 
                       o nome do arquivo sempre mude para não haver confilito.)
            */
            cb(null, `${Date.now()}${aleatorio()}${extname(file.originalname)}`)
        },
    })

};