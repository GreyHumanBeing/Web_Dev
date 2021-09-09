'use strict'

//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones


//Se define de la siguiente manera: 

function calculadora(){ 

    //Conjunto de instrucciones a ejecutar
    console.log("Hola"); 
    console.log("Soy una funcion."); 
    return "Hola soy una funcion";

}

console.log("Llamo a la funcion"); 
calculadora();
console.log("Ahora la guardo en una variable y hago un console.log de esa variable:"); 

var resultado=calculadora(); 

console.log(resultado); 
console.log("Al guardarla en una variable y pasarla como parametro a console.log"+
"\nse ejecutan las instrucciones pero ademas imprimer el valor devuelto con return ");
