'use strict'

//Funciones dentro de funciones
//Podemos agrupar las instrucciones a ejecutar en la funcion principal
//Tanto si mostrar==false o mostrar==true y de esa manera 
//hacer al codigo de la funcion calculadora mas legible
//Evitando codigo en la misma y agrupando este en dos funciones distintas
//(llamadas porPantalla y porConsola)
//que llamaremos desde la funcion calculadora



function porConsola(numero1,numero2)
{ 
        console.log("Suma: "           + (numero1 + numero2) );
        console.log("Resta: "          + (numero1 - numero2) );
        console.log("Multiplicacion: " + (numero1 * numero2) );
        console.log("Division: "       + (numero1 / numero2) );
        console.log("***************************************");
}

function porPantalla(numero1,numero2)
{
        document.write("Suma: "           + (numero1 + numero2) + "<br/>" );
        document.write("Resta: "          + (numero1 - numero2) + "<br/>" );
        document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>" );
        document.write("Division: "       + (numero1 / numero2) + "<br/>" );
        document.write("***************************************"+ "<br/>" );

}



function calculadora(numero1, numero2, mostrar = false)
{ 

     if(mostrar==false)
     {
        porConsola(numero1,numero2);
        // return "Hola desde la funcion calculadora"; 
     }
     else
     {
     	porPantalla(numero1,numero2);
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