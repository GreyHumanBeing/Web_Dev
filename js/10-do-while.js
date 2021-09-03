'use strict'
//Activo el modo estricto 

//Bucle do while
//La diferencia entre el bucle while y el bucle do while esta en que en el bucle while primero se 
//comprueba si la condicion especificada es verdadera y si lo es ejecuta el codigo adentro del 
//bucle while mientras que cuando utiliazamos el bucle do while, primero se ejecuta el codigo 
//adentro del bucle y despues se comprueba la condicion, es decir que siempre que utilicemos 
//el bucle do while el bloque de codigo adentro del bucle se ejecutara al menos una vez por mas
//que no se cumpla la condicion.


var year = 45;

do{
    console.log("Como el valor de year es: "+year+" entonces la condicion no se cumple y solo imprime esto una vez(do while)");
    year = 45;
}while(year != 45); 


