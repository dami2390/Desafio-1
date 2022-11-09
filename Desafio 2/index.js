const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.txt");

const principal = async () => {
  const id1 = await contenedor.save({ title: "Juguete Perro 1", price: 3000 });
  const id2 = await contenedor.save({ title: "Juguete Perro 2", price: 4000 });
  const id3 = await contenedor.save({ title: "Juguete Perro 3", price: 5000 });

  console.log(id1, id2, id3); 

  const object2 = await contenedor.getById(2);
  console.log(object2); 

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
 
};

principal();