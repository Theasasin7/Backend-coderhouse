const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();

faker.setLocale("es");

const armarMock = () => {
  return {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    color: faker.color.human()
  }
};

app.get("/test", (req, res) => {
  const { param = 10 } = req.query;
  const mocks = [];
  for (let i = 0; i < param; i++) {
    mocks.push(armarMock());
  }
  res.send({mocks});
});

app.listen(8080, () => {
  console.log("Escuchando!");
});