 //Activamos el modo estricto
'use strict'

//Pruebas con Let y Var 


//Prueba con Var
var edad=20; 

console.log(edad);// Aqui vale 20


if(true){
	var edad=60; 
	console.log(edad);//Aqui vale 60
}

console.log(edad);//Y aqui tambien vale 60



//Prueba con Let
var nombre="Sebastian";
console.log(nombre)//Aqui nombre vale "Sebastian"

if(true){ 
    let nombre="Ana Clara";
    console.log(nombre);//Aqui nombre vale "Ana Clara"

}

console.log(nombre);//Y aqui nombre vale "Sebastian"

//Let actua solo a nivel del bloque en el que se define a la variable sin afectar en nuestro caso 
//a la variable definida con el mismo nombre en el outter scope,actua como una variable distinta
//solo dentro del scope en el que fue definida.
