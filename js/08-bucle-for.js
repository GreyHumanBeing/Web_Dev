'use strict'

//Bucle for
//Un Bucle es una estructura de control que se repite varias veces, 
//un numero finito o infinito de veces. La mayoria de las veces se 
//repite un numero finito de veces. 

//Los bucles tambien se conocen como iteradores,loops,ciclos, etc. 
//Son todos sinonimos de bucle

var numero=100; 
//Cuando definimos un bucle for, primero declaramos una variable con un valor numerico de inicio
//despues definimos la condicion que se debe evaluar para ejecutar el bucle o no, y 
//por ultimo indicamos en cuanto lo queremos incrementar o decrementar
//En el siguiente ejemplo el operador ++ incrementa en 1 a la variable i que definimos como 
//variable del iterador o bucle for.

for(var i=0;i<=numero;i++){
     console.log("Vamos en el numero: " + i);

     //Con la instruccion debugger podemos iterar manualmente desde chrome de a 1
     //debugger;
}