//Activamos el modo estricto
'use strict'

//Constatantes
//Es un contenedor como una variable con la diferencia de que su valor no puede variar.

var   radio_circulo = 20; 
const pi            = 3.1416;

console.log(radio_circulo,pi); 

radio_circulo = 60;
console.log(radio_circulo,pi); 
pi = 6.74; //Aqui nos dara error porque estamos intentando cambiar el valor de una constante.
