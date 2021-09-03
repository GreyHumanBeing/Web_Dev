'use strict'
//Activo el modo estricto 


//Bucle while
//El bucle while es menos estricto(o mas flexible) que el bucle for,nos permite hacer bucles infinitos.
//Y solo debemos indicarle la condicion que se debe cumplir para entrar en el bucle 
//while(condicion){ codigo a ejecutar }

var year = 2021; 

//Ejemplo con operador de incremento(++), le suma uno a la variable indicada.

/*

while(year<=2060){ 
    console.log("El valor de year es: "+year); 
//Si no incremento el valor de year , se vuelve un bucle infito
//dado que year va a ser siempre menor o igual a 2060 , tiene el valor de 2021.
    year++;    
    
}
*/

//Ejemplo utilizando el operador de decremento(--), le resta uno a la variable indicada

while(year>=1990){ 
    
    if(year==1995){ 
//Con la instruccion break salimos del bucle, en este caso saldra cuando year tenga el valor de 1995    
        break;   
    } 

    console.log("El valor de year es: "+year); 
//Si no decremento el valor de year , se vuelve un bucle infito
//dado que year va a ser siempre mayor o igual 1990 , tiene el valor de 2021.
    year--;    


}