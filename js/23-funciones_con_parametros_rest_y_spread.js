'use strict'

//Parametros REST y SPREAD

//Ejemplo de funcion utilizando parametro REST 


//Cuando especificamos un parametro con tres puntos por delante le estamos indicando que es un parametro 
//de tipo REST, es decir que almacenara un numero indefinido de valores pasador como parametros 
//en forma de Array o Coleccion(Son sinonimos) .


function listadoFrutas(fruta1,fruta2,...resto_de_frutas){ 
    console.log("fruta1: "         , fruta1);
    console.log("fruta2: "         , fruta2);
    console.log("resto_de_frutas: ", resto_de_frutas); 

}


//A continuacion se llama a la funcion pasandole como fruta1 el valor "Banana" ,
//como fruta2 el valor "Manzana" y los valores "Pera","Naranja","Sandia" y "Melon"
//seran almacenados en el parametro REST resto_de_frutas en forma de Array o Coleccion.

listadoFrutas("Banana","Manzana","Pera","Naranja","Sandia","Melon"); 

//Ejemplo de uso de Parametro SPREAD

//Creo un Array

var frutas=["Tanjarina","Uva","Pera","Naranja","Sandia","Melon"];

//De esta forma le pasaramos los valores del array a los parametros de la funcion listadoFrutas, 
//es decir, el primer valor del array(en este caso "Tanjarina") se pasara como fruta1, 
//el segundo valor del array(en este caso "Uva") se pasara como fruta2 y todos los demas 
//valores del array seran recogidos por el parametro definido como REST en la funcion(resto_de_frutas)
//Y mostrado como un array con los ultimos cuatro valores del mismo , ya que los primeros dos 
//fueron pasados como fruta1 y fruta2 respectivamente.
listadoFrutas(...frutas);


//Los parametros de tipo REST son definidos en la funcion y recoge una serie de valores indefinidos
//y los almacena dentro de un array 

//Los parametros de tipo SPREAD se utilizan para cuando queremos pasarle a la funcion valores
//contenidos en un Array y la misma al notar que en la llamada se han indicado los tres puntos
//antes del nombre del array interpretara los valores del array 1 por 1 como si fueran distintos 
//valores de los parametros definidos en la funcion.
