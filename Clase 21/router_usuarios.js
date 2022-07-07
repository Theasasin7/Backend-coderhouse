const express = require("express");
const ServicioMock = require("./servicio_mock");

const routerUsuario = express.Router();
const servicioMock = new ServicioMock();

routerUsuario.post("/popular", (req, res) => {
  const { cant } = req.query;
  const mocks = servicioMock.popular(cant);
  res.send({mocks});
});

routerUsuario.get("/:id?", (req, res) => {
  const { id } = req.params;
  const mocks = servicioMock.obtener(id);
  res.send({mocks});
});

routerUsuario.post("/", (req, res) => {
  servicioMock.agregar(req.body);
  res.sendStatus(201);
});

routerUsuario.put("/:id", (req, res) => {
  servicioMock.actualizar(req.params.id, req.body);
  res.sendStatus(200);
});

routerUsuario.delete("/:id", (req, res) => {
  servicioMock.borrar(req.params.id);
  res.sendStatus(200);
});

module.exports = routerUsuario;