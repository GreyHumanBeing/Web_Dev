'use strict'

//Calculadora
//Pida dos numero por pantalla
//En el body de la pagina en una alerta y por la consola el resultado de sumar,restar,multiplicar y dividir
//esas dos cifras

var numero1; 
var numero2;

do{ 
    numero1 = parseInt(prompt("Ingrese el primer numero: ",1)); 
    numero2 = parseInt(prompt("Ingrese el segundo numero: ",1));

}while(isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0); 

var suma           = numero1 + numero2; 
var resta          = numero1 - numero2; 
var multiplicacion = numero1 * numero2; 
var division       = numero1 / numero2;

console.log("La suma de ambos numeros es: " + suma );
console.log("La resta del numero " + numero1 + " menos " + numero2 + " es: "  + resta );
console.log("La multiplicacion de ambos numeros es: " + multiplicacion );
console.log("La division del numero " + numero1 + " dividido " + numero2 + " es: "  + division );

alert("La suma de ambos numeros es: " + suma );
alert("La resta del numero " + numero1 + " menos " + numero2 + " es: "  + resta );
alert("La multiplicacion de ambos numeros es: " + multiplicacion );
alert("La division del numero " + numero1 + " dividido " + numero2 + " es: "  + division ); 

document.write("La suma de ambos numeros es: " + suma +"<br/>");
document.write("La resta del numero " + numero1 + " menos " + numero2 + " es: "  + resta + "<br/>" );
document.write("La multiplicacion de ambos numeros es: " + multiplicacion + "<br/>" );
document.write("La division del numero " + numero1 + " dividido " + numero2 + " es: "  + division + "<br/>" );