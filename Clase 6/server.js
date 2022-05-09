const express = require('express');
const fs = require('fs');
const app = express();
const content = require('./index.js');


app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Desafio express</title>
    </head>
    <body>
        <h1 style="color:cyan;">Hola Bienvenido al servidor express</h1>
        <div style="display: flex; flex-direction: column; font-size: 1.2rem; gap: 1rem;">
        <a href='/productos'>Clickeame para ir a la pagina de el objeto de productos</a>
        <a href='/productoRandom'>Clickeame para ir a la pagina de un producto random</a>
        </div>
    </body>
    </html>
    `);
});

app.get('/productos', (req, res) => {
    res.send(content.read());
});

app.get('/productoRandom', (req, res) => {
    res.send(content.readRandom());
});

app.listen(8080, () => {
console.log('Servidor levantado!');
});