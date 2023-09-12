//clase 14 y 15 funciones flechas


let nombre = function (parametro) {
  // codigo a ejecutar

} 

// las funciones flecha no se pueden llamar antes de ser creada
//let recuperaDato2 = funcionFlecha();

// funcion flecha
let funcionFlecha = () => {
  console.log('esto es el resutado de una funcion flecha');
  return 'flecha'
}


//si lo quieres seguir utilizando toca  (por medio de una variable )

// en este ejemplo recupero el valor de return que es "flecha"
let recuperaDato = funcionFlecha();
console.log(recuperaDato);

console.log(funcionFlecha());// con console solo imprime y asta alli se pierde el dato osea no lo podemos volver  a imprimir o llamar 

//-------------------------------------------------------------------------------------

// reduce el codigo cuando solo es en una linea, aqui nos ahorramos  los crochetes{}
const funcionsinple = () => console.log ("esto es posible por que solo tiene una linea de codigo");

funcionsinple ();


// si la funcion solo va a recibir un solo un unico parametro no es necesario cplocar los () en texto como parametro
const funcionEsperaParametro = texto => console.log (texto);
funcionEsperaParametro ("pasamos un argumento a la funcion flecha");


// funcion flecha con varios parametros, si nesecito hacer calculos complejos de varias lineas se recomienda hacerlo con corchetes{} y usar return.
const funcionSumar = (dato1, dato2) => dato1 + dato2;
console.log (funcionSumar (10,5));

// reducir el codfigo cuando la funcion tiene una sola linea y retorne valor:
const funcionRetornaValor = () => "esto es pocible porque solo tiene una linea de codigo, no es necesario el return."
console.log (funcionRetornaValor());

// regresar un objeto 
const regrersarObjeto = () => ({nombre: "juan", apellido: "perez"})
console.log (regrersarObjeto());








