'use strict'
//Activo el modo estricto
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/


do{
var num1_tmp = parseInt(prompt("Ingrese un numero: "));
var num2_tmp = parseInt(prompt("Ingrese otro numero: "));
}while(isNaN(num1_tmp) || isNaN(num2_tmp) || num1_tmp == num2_tmp);


var numero_mayor;
var numero_menor;

if(num1_tmp>num2_tmp){ 
	numero_mayor=num1_tmp;
    numero_menor=num2_tmp;
}
else 
{
    numero_mayor=num2_tmp;
    numero_menor=num1_tmp;
}

document.write("<h1> De "+numero_menor+" a "+numero_mayor+" estan los siguientes numeros: </h1>");

for(var i=numero_menor ; i<=numero_mayor ; i++){
	document.write(i);
	document.write("<br/>");
}
