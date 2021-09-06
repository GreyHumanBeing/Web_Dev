'use strict'

//Tabla de multiplicar de un numero introducido por pantalla 

do { 
    var numero = parseInt(prompt("Introduce un numero del 1 al 9: "));
}while(isNaN(numero) || ( numero > 9 || numero < 1 ) ); 

document.write("La tabla del numero " + numero + " es: <br/>");

for (var i=1 ; i <= 10 ; i++){
	document.write("<br/>" + numero+" * "+i+" = "+ (i*numero) );
}


//Todas las tablas de multiplicar 

for(var i = 1 ; i <= 10 ; i++){ 
    document.write("<h1>Tabla del "+i+"</h1><br/>");
    for(var x = 1 ; x <= 10 ; x++ ){ 
        document.write(i + " * " + x + " = " + (i*x) + "<br/>");  
    
    }



}