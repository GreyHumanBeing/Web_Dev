'use strict'

//Funciones con parametros
//El uso de parametros hace mas dinamica y reutilizable a la funcion
//En el siguiente ejemplo, es una calculadora que la puedo llamar cuantas veces
//quiera pero ademas utilizando diferentes valores para los calculos mediante 
//el uso de parametros. 
//Podemos tambien hacer uso de parametros opcionales, estos son parametros
//que ya definimos en la funcion con un valor por default que utilizara 
//en el caso de que no pasemos ese parametro cuando llamemos a la funcion.


function calculadora(numero1, numero2, mostrar = false)
{ 

     if(mostrar==false)
     {
        console.log("Suma: "           + (numero1 + numero2) );
        console.log("Resta: "          + (numero1 - numero2) );
        console.log("Multiplicacion: " + (numero1 * numero2) );
        console.log("Division: "       + (numero1 / numero2) );
        console.log("***************************************");
        // return "Hola desde la funcion calculadora"; 
     }
     else
     {
        document.write("Suma: "           + (numero1 + numero2) + "<br/>" );
        document.write("Resta: "          + (numero1 - numero2) + "<br/>" );
        document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>" );
        document.write("Division: "       + (numero1 / numero2) + "<br/>" );
        document.write("***************************************"+ "<br/>" );
        // return "Hola desde la funcion calculadora";     	
     }     
}

//Llamo a la funcion calculadora
//Como omitimos pasarle el valor del parametro mostrar , toma por defecto el valor false 
//y lo muestra en la consola:
calculadora(10,2);

//Ahora le pasamos true como valor del parametro mostrar , por lo tanto lo mostrara solamente en 
//la pagina web misma
calculadora(1,2,true);



//Llamo a la funcion varias veces desde un bucle for variando el valor de uno de los parametros
//llamara a la funcion calculadora 10 veces, del valor inicial de i=1 al valor final i=10
//y pasara el valor de i como uno de los parametros


/*
for(var i=1; i<=10; i++){ 
    console.log(i);
    calculadora(i, 10);
}
*/