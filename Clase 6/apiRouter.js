const express = require('express');
const content = require('./index.js');
const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: true }));

apiRouter.get('/productos', (req, res) => {
    res.send(content.read());
});

apiRouter.get('/productos/:id', (req, res, next) => {
    producto = content.readById(parseInt(req.params.id));
    producto !== null ? res.send(producto) : next(new Error("No existe el producto"));
});

apiRouter.post('/productos', (req, res) => {
    content.create(req.body.title,req.body.price,req.body.thumbnail);
    res.send(content.read());
});

apiRouter.put('/productos/:id', (req, res, next) => {
    content.update(parseInt(req.params.id), req.body) ? res.send(content.read()) : next(new Error("No existe el producto"));
});

apiRouter.delete('/productos/:id', (req, res, next) => {
    content.deleteProduct(parseInt(req.params.id)) ? res.send(content.read()) : next(new Error("No existe el producto"));
});

apiRouter.use((err, req, res, next) => {
    res.status(500).send({error:"producto no encontrado"});
});

module.exports = apiRouter;