
function sumarDosNumeros(numeroUno, numeroDos) {
  const resultado = numeroUno + numeroDos;
  return resultado;
}

console.log(sumarDosNumeros(4,3));

/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} numeroUno Primer numero
 * @param {number} numeroDos Segundo numero
 * @returns {number} Es el resultado de la suma de numeroUno y numeroDos
 */
function sumarDosNumerosDocumentada(numeroUno, numeroDos) {
  const resultado = numeroUno + numeroDos;
  return resultado;
}

console.log(sumarDosNumerosDocumentada(5,9));

/* 
  Esta es una función anónima (no tiene nombre)
  y además es una función invocada inmediatamente (IIFE)
*/
console.log(
  (
    function(numeroUno, numeroDos) {
      let resultado = numeroUno + numeroDos;
      return resultado;
    })(10, 20)
);

// La definimos como una asignación
const sumarDosNumerosObjeto = function(numeroUno, numeroDos) {
  const resultado = numeroUno + numeroDos;
  return resultado;
}

// Esta es una arrow function completa.
const sumarDosNumerosArrow = (numeroUno, numeroDos) => {
  const resultado = numeroUno + numeroDos;
  return resultado;
}

// Si tiene un solo argumento, podemos obviar los paréntesis.
const imprimirPorPantalla = mensaje => {
  console.log(mensaje);
  console.log('otra');
};

/*
  Si tiene una sola instrucción, podemos obviar las llaves.
  Además, esto tiene lo que se conoce como devolución implícita.
*/
const imprimirPorPantallaCompacto = mensaje => console.log(mensaje);

// Esto es igual que la función sumarDosNumeros.
const sumaConDevolucionImplicita = (numeroUno, numeroDos) => numeroUno + numeroDos;


// Ejemplo de static

class Fabrica {

  static cantidadDeAutos = 0;

  cantidadDeEstaFabrica;

  crearAuto() {
    // lo necesario para crear un auto
    Fabrica.cantidadDeAutos = Fabrica.cantidadDeAutos + 1;
  }
}

const fabricaEnLanus = new Fabrica();
const fabricaEnMoron = new Fabrica();

fabricaEnLanus.crearAuto();
fabricaEnMoron.crearAuto();

console.log('Cantida de autos totales: ', Fabrica.cantidadDeAutos);
