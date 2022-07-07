const express = require('express');
const cp = require('cookie-parser');

const app = express();
app.use(cp());

app.post('/cookies', express.json(), (req, res) => {
  console.log(req.body);
  const { nombre, valor, duracion } = req.body;
  res.cookie(nombre, valor, { maxAge: duracion * 1000 });
  res.send('Cookie Seteado');
});

app.get('/cookies', (req, res) => {
  res.send(req.cookies);
});

app.delete('/cookies/:nombre', (req, res) => {
  res.clearCookie(req.params.nombre);
  res.send();
});

app.listen(8080, () => {
  console.log('Escuchando!');
});