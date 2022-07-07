const express = require('express');
const cp = require('cookie-parser');

const app = express();

app.use(cp('richard'));

app.get('/setearCookie', (req, res) => {
  const { nombre, valor } = req.query;
  res.cookie(nombre, valor, { signed: true }); // Escribe el header pero no manda todavía la respuesta
  res.send('Cookie seteada'); // Mando la respuesta
});

app.get('/verCookies', (req, res) => {
  res.send(req.signedCookies);
});

app.listen(8080, () => {
  console.log('Escuchando!');
});
