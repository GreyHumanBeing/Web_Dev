'use strict'
//Activo modo estricto

/*
Utilizando un bucle, pedir una serie de numeros 
hasta que el usuario ingrese un numero negativo y ahi mostrar la suma y el promedio de los 
numeros introducidos
*/


var numero;
var promedio;
var contador = 0;
var suma = 0;


while(true){
     
        numero = Number(prompt("Ingrese un numero positivo(Negativo para finalizar): "),0)
        if(numero>=0){
        	suma= suma + numero;
            contador++;
            promedio = suma/contador;
            console.log(suma);
            console.log(contador);
            console.log(promedio);
        }
        else if(isNaN(numero)){
        	alert("Debe de ingresar un numero");
        }
        else{
            break;
        }

}

alert("La suma de los numeros ingresados es: "+ suma);
alert("El promedio de los numeros ingresados es: "+ promedio);