'use strict'
//Modo estricto activado 

//switch



var edad; 
var cadena_texto = '';
//edad = 18;
//edad = 22;
//edad = 40;
//edad = 70;
//edad = 70.7;
//edad = 19;
//edad = 35;
//edad = 56;

switch(edad){
    case 18:
        cadena_texto="Tienes "+String(edad)+" anios.";
    break;
    case 22:
        cadena_texto="Tienes "+String(edad)+" anios.";
    break;
    case 40:
        cadena_texto="Tienes "+String(edad)+" anios.";
    break;
    case 70:
        cadena_texto="Tienes "+String(edad)+" anios.";
    break;
    default: 
         cadena_texto="No tienes ni 18 ni 22 ni 40 ni 70 anios sino que tienes "+String(edad)+" anios.";

}

console.log(cadena_texto);