'use strict'
//Activo el modo estricto


/*
Programa que nos pida dos numeros y nos diga cual es mayor, cual es menor y si son iguales
PLUS: Si los numeros no son numeros que nos vuelva a pedir un nuemero
*/ 


var numero1; 
var numero2; 


while(true){
numero1 = Number(prompt("Ingrese el primer numero: ", 0)); 
numero2 = Number(prompt("Ingrese el primer numero: ", 0)); 

if (isNaN(numero1) || isNaN(numero2)) { 
    alert("Numero incorrecto/s, vuelve a introducir los valores");
} 
else { 
    break;
}

}


if (numero1==numero2){ 
    alert("Ambos numeros son iguales.")
}
else if(numero1>numero2){
	alert("El numero "+ numero1 + " es mayor al numero "+ numero2);
}
else if(numero2>numero1) { 
	alert("El numero "+ numero2 + " es mayor al numero "+ numero1);
}
else{ 
    alert("Intoduce numeros correctos.");
}