// clase 16 funciones callback


//las funciones callback reciben como paramatro otras  funciones ademas estas funciones se pueden llamar antes de ser realizadas

//creacion de la funcion: primero la palabra clave funtion seguida del nombre y entre parentecis los parametros separados por una coma (como es un funcion callback le colocamos una funcion dentro de los parametros)

function nombreDeFuncion (articulo1, articulo2, funcion) {
  let gastado = articulo1 + articulo2;
  funcion (gastado);
}

//mostramos la funcion en consola como mensaje
function nombreDeFuncion (mensaje) {
  console.log (`compramos leche y pan y gastamos: ${mensaje}`);
}

//lamando la funcion
nombreDeFuncion (70,67, nombreDeFuncion);