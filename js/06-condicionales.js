'use strict'
//Activo el modo estricto


//Condicional If
//Es una estructura de control
//Si la condicion especificada es verdadera (es decir devuelve true) el codigo espeficado se ejecutara
//Podemos utilizar if anidados, esto es un if adentro de otro if, y tambien especificar la condicion 
//else if que comprobaria otra condicicion si el primer if es falso
//tambien tenemos el else que lo indicamos al final de la esctructura del if que ejecuta un bloque 
//de codigo cuando ninguna de las condiciones especificadas anteriormente se cumple

/*

Operadores relacionales:
    Mayor: > 
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=

 */


//Vamos a suponer que tenemos un usuario, almacenaremos su nombre y edad en las variables nombre y edad. 

var nombre = "Hugo"; 
var edad   = 22; 

//Podemos testear todas las condiciones cambiandole el valor a la variable edad.

if(edad>=18){ 
    console.log(nombre + " tienes " + edad + " anios"); 
    //If anidado 
    if(edad>=35){ 
      console.log(nombre + " tu edad supera los 35 anios.");
      }
    else if(edad<=35){
      console.log(nombre + " tu edad  es mayor a 18 pero menor a 35 anios");
    }  
    
}
else {
     console.log(nombre+ " tienes "+edad+" anios. Eres menor de edad");


}   


/*
Operadores Logicos
AND: && 
OR : ||
Negacion(NOT): ! 
*/


var year; 
//Testing de not !
//year=2021;

//Testing de AND &&
//year=2031;
//year=2019;
//year=2050; 


//Testing de OR ||
//year=2022;
//year=2051;
year=2047;


//NOT: ! 
//!= : No es igual
if(year!=2020){ 
    console.log("El valor de year no es igual a 2020, el valor de year es: " + year);
}



//AND: &&

if(year>=2020 && year<=2030){ 
    console.log("El valor de year esta dentro de 2020 y 2030, el valor de year es: "+ year); 
}
else { 
    console.log("El valor de year no esta entre 2020 y 2030, el valor de year es: "+year); 
}

//OR: ||


if(year==2022 || year>2050){ 
    console.log("El valor de year o es igual a 2022 o es mayor a 2050, el valor de year es: "+year);
}
else 
{ 
    console.log("El valor de year no es igual a 2022 y tampoco es mayor a 2050, el valor de year es: "+year);
}