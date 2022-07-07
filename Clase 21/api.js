class Calculadora {

  static resta(a, b) {
    return a-b;
  }
  
}

/*
  La clase calculadora expone el metodo resta, que recibe dos numeros, y retorna un numero.
*/

class Contenedor {

  obtenerTodos() {

  }
}



class ServicioProductos {

  constructor(contenedor) {
    this.contenedor = contenedor;
  }

  obtenerTodos() {
    return this.contenedor.obtenerTodos();
  }
}

describe('Servicio de productos', () => {

  it('Deberia devolver todos los productos', async () => {
    const contenedorDeMentira = {
      obtenerTodos: () => [{name: "PRoducto Uno"}]
    };
    const miServicio = new ServicioProductos(contenedorDeMentira);
    const productos = await miServicio.obtenerTodos();
    expect(productos.length).toBe(1);
  });

});