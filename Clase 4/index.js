const fs = require('fs')

class Contenedor {
    constructor(name) {
        this.fileName = name
        this.countID = 1
        this.content = []
    }

    async write() { //Método que escribe/sobreescribe: de este manera queda más limpio el código de los otros métodos
        await fs.promises.writeFile(this.fileName, JSON.stringify(this.content))
    }

    save(object) {
        this.countID++ //Aumento la propiedad que va guardando el ID más alto
        object["id"] = this.countID //Agrego la propiedad id al objeto pasado como parámetro
        this.content.push(object) //Agrego el objeto al contenido(array)
        this.write() //Agrego el objeto al archivo
        return `El id del objeto añadido es ${this.countID}` //Retorna el ID (lo solicita la consigna)
    }

    async getAll() { //Devuelve un array con los objetos presentes en el archivo
        return this.content
    }

    getById(id) { //Recibe un id y devuelve el objeto con ese id, o null si no está.
        let result
        if (this.content !== []) {
            result = this.content.find(x => x.id === id)
            if (result === undefined) {
                result = null
            }
        } else {
            result = 'El archivo está vacío'
        }
        return result
    }

    deleteById(id) { //Elimina del archivo el objeto con el id buscado
        let result
        if (this.content !== []) {
            let newContent = this.content.filter(x => x.id !== id)
            this.content = newContent
            this.write() //SobreEscribo el archivo
            result = 'OK'
        } else {
            result = `El archivo está vacío`
        }
        return result
    }

    async deleteAll() { //Elimina todos los objetos presentes en el archivo.
        this.content = this.content.splice(0, this.content.length)
        this.write()
    }
}

const execute = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: "Audifonos",
        price: 1199,
        thumbnail: "https://m.media-amazon.com/images/I/61nezBJp73L._AC_SX679_.jpg"
    })

    contenedor.save({
        title: "Teclado",
        price: 799,
        thumbnail: "https://m.media-amazon.com/images/I/71sFaDtowqL._AC_SX679_.jpg"
    })

    contenedor.save({
        title: "Galaxy S21+",
        price: 10599,
        thumbnail: "https://m.media-amazon.com/images/I/41du4H3-AEL._AC_.jpg"
    })
    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

execute();