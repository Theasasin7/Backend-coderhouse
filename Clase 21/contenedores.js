class ContenedorMemoria {

  datos = [];

  save(objeto) {
    this.datos.push(objeto);
  }

  get() {
    return this.datos;
  }

  getById(id) {
    return this.datos[id];
  }
}

class ContenedorSQL {

  constructor(tabla) {
    this.tabla = tabla;
  }

  save(objeto) {
    knex("db").table(this.tabla).insert(objeto);
  }

  get() {}

  getById() {}
}

class ContenedorProductosMemoria extends ContenedorMemoria {
  constructor() {
    super();
  }
}

class ContenedorProductosSQL extends ContenedorSQL {
  constructor() {
    super("productos");
  }
}


class ContenedorCarritosMemoria extends ContenedorMemoria {
  constructor() {
    super();
  }
}

const contenedorProductos = new ContenedorProductosSQL();
contenedorProductos.save({nombre: "Limpiapisos"});
console.log(contenedorProductos.get());

const contenedorCarritos = new ContenedorCarritosMemoria();
contenedorCarritos.save({productos: ["Limpiapisos"]});
console.log(contenedorCarritos.get());

routerProductos.post("/", () => {
  contenedorProductos.save(req.body);
});

routerCarritos.post("/", () => {
  contenedorCarritos.save(req.body);
});

routerCarritos.post("/:idCarrito/productos", () => {
  const carrito = contenedorCarritos.getById(req.params.idCarito);
  carrito.productos.push(req.body);
  contenedorCarritos.update(carrito);
});

routerCarritos.delete("/:idCarrito/productos/:idProducto", () => {
  const carrito = contenedorCarritos.getById(req.params.idCarito);
  carrito.productos.splice(req.params.idProducto, 1);
  contenedorCarritos.update(carrito);
  res.send("carrito actualizado");
});

routerCarritos("/", () => {
  contenedorCarritos.save(req.body);
});