'use strict'

/*
Que nos diga si un numero es par o impar.
1.Ventana Prompt
2.Si no es valido que nos pida de nuevo el numero.
*/

var numero;

do{ 
    numero=parseInt(prompt("Introduzca un numero mayor a 0: "));
}while( isNaN(numero) || numero <= 0 );


if(numero%2==0)
{
	document.write("El numero "+numero+" es par.")
}
else{ 
    document.write("El numero "+numero+" es impar.")
}