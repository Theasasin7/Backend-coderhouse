// Definición
const fs = require('fs');

function ejecutarFuncion(funcionAEjecutar, argumento) {
  funcionAEjecutar(argumento);
};

function saludar(nombre) {
  console.log(`Hola! ${nombre}`);
};

ejecutarFuncion(saludar, 'Alumnos');

const escribirEnArchivo = (callback) => {
  fs.writeFile('resultado.txt', 'richard', (error) => {
    if (error) callback(error);
    else callback(null, 'Operacion exitosa');
  });
}

const llamarAPI = () => {
  console.log('Llamado a la API');
};

const secuencia = () => {
  escribirEnArchivo();
  llamarAPI();
}

secuencia();

const suma = (num1, num2) => num1+num2;
const resta = (num1, num2) => num1-num2;
const multiplicacion = (num1, num2) => num1*num2;
const division = (num1, num2) => num1/num2;
const modulo = (num1, num2) => num1%num2;

const operacion = (funcion, arg1, arg2) => funcion(arg1, arg2);

console.log('Suma: ', operacion(suma, 5, 5));
console.log('Resta: ', operacion(resta, 10, 5));
console.log('Multiplicacion: ', operacion(multiplicacion, 3, 3));
console.log('Division: ', operacion(division, 10, 5));
console.log('Modulo: ', operacion(modulo, 20, 10));