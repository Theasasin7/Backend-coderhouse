const fs = require('fs')

const productos = require('./productos.txt');

class Contenedor {

    create(title, price, thumbnail) {
        const producto = {
            title,
            price,
            thumbnail,
            id: productos.length + 1
        };
        productos.push(producto);
        fs.writeFileSync('./productos.txt', JSON.parse(productos));
    }

    read() {
        const data = fs.readFileSync('./productos.txt', {encoding:'utf8', flag:'r'});
        return data;
    }

    update(id, producto) {
        productos[id] = producto;
        fs.writeFileSync('./productos.txt', JSON.parse(productos));
    }

    deleteProduct(id) {
        productos.splice(id, 1);
        fs.writeFileSync('./productos.txt', JSON.parse(productos));
    }

    readRandom() {
        const data = fs.readFileSync('productos.txt', {encoding:'utf8', flag:'r'});
        return (JSON.parse(data)[Math.floor(Math.random() * Object.keys(JSON.parse(data)).length)]);
    }
}

module.exports = new Contenedor();