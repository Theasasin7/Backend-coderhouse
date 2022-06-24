
var admin = require("firebase-admin");

var serviceAccount = require("./pc-parts-store-firebase-adminsdk-0jz4m-a45052eab7.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pc-parts-store.firebaseio.com"
});

const probar = async () => {
    const db = admin.firestore();
    const query = db.collection("colores");

/*
  1) Agregar todos los colores 
    const red = query.doc('red');
  await red.create({ nombre: "red" });

  const green = query.doc('green');
  await green.create({ nombre: "green" });

  const blue = query.doc('blue');
  await blue.create({ nombre: "blue" });

  console.log('Documentos creados!');
*/

/*
  2) Listar todos los docs
const resultados = (await query.get()).docs;
  console.log(resultados.map(resultado => resultado.data()));
*/

/*
  3) Modificar blue por navy
const doc = query.doc('blue');
  await doc.update({ nombre: 'navy' });

  console.log('Nombre modificado');
*/

/*
  4) Borrar el color green
const doc = query.doc('green');
  await doc.delete();

  console.log('Color borrado');
  */
}

probar();