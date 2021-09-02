//Activo el modo estricto
"use strict"

//Operadores
var numero1 = 10; 
var numero2 =  9; 

var suma           = numero1 + numero2; 
var resta          = numero1 - numero2; 
var multiplicacion = numero1 * numero2;
var division       = numero1 / numero2;
var resto          = numero1 % numero2; 

alert("El numero1 vale: " + numero1);
alert("El numero2 vale: " + numero2);

alert("La suma de ambos es: "+ suma);
alert("La resta de numero1 - numero2  es: "+ resta);
alert("La multiplicacion de ambos es: "+ multiplicacion);
alert("La division de numero1 / numero2 es: "+ division);
alert("El resto de dividir numero1 / numero2 es:  "+ resto);

// Tipos de datos

//Tipos mas basicos de datos

var numero_entero = 20; 
var numero_float  = 20.678; 
var cadena_texto  = "Hola que tal?"; 
var booleano      = true; 

console.log(numero_entero); 
console.log(numero_float);
console.log(cadena_texto); 
console.log(booleano);

//Utilizando typeof para conocer el tipo de dato almacenado en las variables 

console.log(typeof numero_entero); 
console.log(typeof numero_float); 
console.log(typeof cadena_texto); 
console.log(typeof booleano);

//Funciones de conversion de cadena a numero 

var numero_en_cadena = "56"; 

console.log(numero_en_cadena+66); //En este caso convierte el 66 a string 
//y concatena los valores(no los suma)


//Funciones Number,parseInt,parseFloat

console.log(Number(numero_en_cadena)+66); //Number convierte la cadena al cualquier tipo de numero. 
console.log(parseInt(numero_en_cadena)+66)//parseInt convierte la cadena a numero entero. 
console.log(parseFloat(numero_en_cadena)+66)//parseFloat convierte la cadena a numero flotante.

//Si convierto una cadena conteniendo un decimal a entero con parseInt, 
//lo truncara(le quitara los decimales) y lo convertira en entero 

var numero_en_cadena = "99.99"; 

console.log(parseInt(numero_en_cadena));

//Utilizando el metodo String, convertimos a cadena de texto  

var numero1 = 50.88; 
var numero2 = 30; 


console.log(numero1+numero2);//Aqui los suma 
console.log(String(numero1) + numero2);//Aqui hace una conversion explicita a string con la funcion string
//a cadena y otra implicita en numero2 y concatena los valores en lugar de sumarlos


