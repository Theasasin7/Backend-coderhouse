const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        const fileName = file.fieldname + '-' + Date.now()
        cb(null, fileName)
    }
});

const uploader = multer({storage: storage});

app.post('/subida', uploader.single('archivo'), (req, res) => {
    res.send('gracias por subir un archivo');
});

app.get('/subir', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});

app.listen(8080, () => {
    console.log('Estoy escuchando');
});