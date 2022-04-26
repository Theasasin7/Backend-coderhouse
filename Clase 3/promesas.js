function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) reject('no se puede dividir por cero');
    else resolve(dividendo / divisor);
  });
};

dividir(4,2)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log('ERROR: ', error))
  .finally(() => console.log('finally'));

function multiplicarPorDos(numero) {
  return new Promise((resolve) => {
    resolve(numero * 2);
  });
}

function multiplicarPorTres(numero) {
  return new Promise((resolve) => {
    resolve(numero * 3);
  });
};

function hacerMultiplicaciones() {
  return multiplicarPorDos(4).then((valor) => {
    return valor * 3;
  });
};

hacerMultiplicaciones().then((resultado) => console.log(resultado));


