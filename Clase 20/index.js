const mongo = require("mongodb");
const ejectuar = async () => {
  const mongo = new MongoClient("mongodb+srv://ulises:cjWPXTVlW9j81oR5@db-coderhouse.l7nmq.mongodb.net/?retryWrites=true&w=majority");
  await mongo.connect();
  await mongo.db("comercio").collection("usuarios").insert({nombre: "Otro", apellido: "Usuario", dni: "37124321"});
  console.log('Ingresado correctamente');
  //const resultados = await mongo.db("comercio").collection("usuarios").find().toArray();
  //console.log(resultados);
};

ejectuar();