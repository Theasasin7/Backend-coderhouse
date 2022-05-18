const fs = require('fs')

const productos = require('./productos.json');

class Contenedor {

    create(title, price, thumbnail) {
        const producto = {
            title,
            price,
            thumbnail,
            id: productos.length + 1
        };
        productos.push(producto);
        fs.writeFileSync('./productos.json', JSON.stringify(productos));
    }

    read() {
        const data = fs.readFileSync('./productos.json', {encoding:'utf8', flag:'r'});
        return JSON.parse(data);
    }

    update(id, producto) {
        if(this.exist(id)) {
            producto["id"] = id;
            productos[this.returnPositionById(id)] = producto;
            fs.writeFileSync('./productos.json', JSON.stringify(productos));
            return true;
        } else {
            return false;
        }
        
    }

    returnPositionById(id) {
        return productos.findIndex(producto => producto.id === id);
    }

    deleteProduct(id) {
        if(this.exist(id)) {
            productos.splice(this.returnPositionById(id), 1);
            fs.writeFileSync('./productos.json', JSON.stringify(productos));
            return true;
        } else {
            return false;
        }
        
    }

    exist(id) {
        return productos.some(producto => producto.id === id);
    }

    readById(id) {
        return this.exist(id) ? productos.filter(producto => producto.id === id) : null;
    }
}

module.exports = new Contenedor();