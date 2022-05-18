const express = require('express');
const app = express();
const apiRouter = require('./apiRouter.js')

app.use('/api', apiRouter);
app.use(express.static('public'));

app.listen(8080, () => {
console.log('Servidor levantado en el puerto 8080!');
});