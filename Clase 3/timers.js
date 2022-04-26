
const imprimirTerminado = () => console.log('terminado');

setTimeout(imprimirTerminado, 3000);

const timerId = setInterval(imprimirTerminado, 1000);

setTimeout(() => {
  clearInterval(timerId);
}, 5000);

const resolverEn10 = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });
};

resolverEn10()
  .then(() => {
    console.log('pasaron 10 segundos')
  });