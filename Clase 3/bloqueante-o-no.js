const fs = require('fs');
const imprimirEnPantalla = require('./imprimir');

imprimirEnPantalla('hola');

fs.writeFile('./resultado.txt', 'richard', () => {
  console.log('Termine de escribir');
});

console.log('Otra instruccion');