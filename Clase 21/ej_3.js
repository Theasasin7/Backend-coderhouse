const express = require("express");
const app = express();
const usuariosRouter = require("./router_usuarios");

app.use(express.json());

app.use('/api/usuarios', usuariosRouter);

app.listen(8080, () => {
  console.log("Estoy escuchando!");
});