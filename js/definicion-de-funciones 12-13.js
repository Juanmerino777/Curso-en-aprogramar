//  FUNCIONES:: clase12 y 13

/* function nombre (parametros ) {
  // codigo a ejecutar 
  console.log (algo) //no se toma como un valor retornado 
  return algo; //si se toma como un valor retornado . sognifica que del otro lado alguien recibira un dato 
}  */

// ejemplo de funciones: primero secoloca la palabra clave funtion + nombre de la misma y entre parentecis el parametro= puede ser texto-String,boleanos,num,y mas... (si es que nesecita) despues en tre llabes se puede mandar a pedir por (console o con return) 

//ej.1
function llamarJaimito (compra) {
  console.log("la compra fue exitosa");
  return compra ;
}

// se  llama con una variable pasando el nombre de la funtion si desea se puede modificar el parametro

let reciboalgo = llamarJaimito('leche');
console.log(reciboalgo)
//----------------------------------------------------------------------------



//ej:2
function traeDelSuper (producto1, producto2) {
  console.log("la compra fue exitosa");
  return `te compre ${producto1} y tambien ${producto2}`;
}

let hijo = traeDelSuper("pan", "leche");
console.log(hijo);

let tio = traeDelSuper("sal", "vino");
console.log(tio);

tio = traeDelSuper("queso", "pan");
console.log(tio);
//las peticiones se pueden pedir con la variable antes y despues de haberla creado

//------------------------------------------------------------------------------------------------------------------



//otra forma de ser creada:

//ej:3 en esta funcion notamos que se llama por medio de una variable  por lo tanto no se puede llamar antes de crearla ya que no se guarda en la memoria yno podemos declarar algo qe no existe 

//lamada antes
let regresaDato2 = miFuncion ("pan", "leche");

//creada
let miFuncion = function (producto1, producto2) {
  console.log("la compra fue exitosa - funcion asignada a una variable");
  return `te compre ${producto1} y tambien ${producto2}`;
}

//llamada despues
let regresaDato = miFuncion ("pan", "leche");
console.log(regresaDato);

