const express = require("express");
const app = express();

const nombres = ["Luis", "Lucia", "Juan", "Augusto", "Ana"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colores = ["Rojo", "Verde", "Azul", "Amarillo", "Magenta"];

const armarMock = () => {
  const indiceNombre = Math.floor(Math.random()*nombres.length);
  const indiceApellido = Math.floor(Math.random()*apellidos.length);
  const indiceColor = Math.floor(Math.random()*colores.length);
  return {
    nombre: nombres[indiceNombre],
    apeelido: apellidos[indiceApellido],
    color: colores[indiceColor]
  }
};

app.get("/test", (req, res) => {
  const mocks = [];
  for (let i = 0; i < 10; i++) {
    mocks.push(armarMock());
  }
  res.send({mocks});
});

app.listen(8080, () => {
  console.log("Escuchando!");
});