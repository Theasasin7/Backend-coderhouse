const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

app.engine('hbs', engine({
    extname: ".hbs",
    defaultLayout: 'index.hbs'
    })
);

app.set("view engine", "hbs");

app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('main', {nombre: 'Ulises', apellido: 'Cruz', edad: 28, email: 'test@email.com', telefono: 12345678910})
})

app.listen(8080, () => {
    console.log('Escuchando')
})