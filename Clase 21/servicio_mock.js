const { faker } = require("@faker-js/faker");

class ServicioMock {

  mocks = [];

  borrar(id) {
    this.mocks.splice(id, 1);
  }

  actualizar(id, mock) {
    let viejoMock = {...this.mocks[id], ...mock};
    this.mocks[id] = viejoMock;
  }

  agregar(mock) {
    this.mocks.push(mock);
  }

  obtener(indice) {
    if (indice) return this.mocks[indice];
    return this.mocks;
  }

  popular(cant = 50) {
    for (let i = 1; i < cant; i++) {
      this.mocks.push({
        nombre: faker.name.firstName(),
        website: faker.internet.domainName(),
        email: faker.internet.email(),
        imagen: faker.image.avatar()
      })
    }
    return this.mocks;
  }
}

module.exports = ServicioMock;