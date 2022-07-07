const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'richard',
  resave: true,
  saveUninitialized: true
}));

app.get('/setearSesion', (req, res) => {
  req.session.admin = true;
  req.session.userId = 'richard';
  res.send('Session seteada');
});

app.get('/obtenerSesion', (req, res) => {
  console.log(req.session);
  const { userId, admin } = req.session;
  res.send({ userId, admin });
});

app.get('/public', (req, res) => {
  res.send('Esto lo podes ver')
});

app.get('/privada', (req, res, next) => {
  if (!req.session?.admin) {
    return res.send('No estas autorizado');
  }
  next();
}, (req, res) => {
  res.send('Esto lo podes ver')
});

app.listen(8080, () => {
  console.log('Escuchando!');
});