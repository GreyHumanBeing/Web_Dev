'use strict'


/*
Mostrar todos los numeros divisores de un numero introducido por el usuario
*/ 


do{
var numero = parseInt(prompt("Introduzca un numero: ",1));
}while(numero<=0 || isNaN(numero));

document.write("<h1>Numeros divisores de el numero   "+numero+"</h1>");


for(var i=0; i<=numero; i++){ 
    if(numero%i==0){
    	document.write("El numero "+ i +" es divisor de el numero " + numero +"<br/>");
    }

}

