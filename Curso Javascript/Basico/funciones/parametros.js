"use strict";

var n1 = prompt("Escribe una palabra", "No has escrito nada");
var n2 = prompt("Escribe otra palabra", "No has escrito nada");

function UnirPalabras(n1,n2,n3=false){
//    var PalabrasUnidas = n1 + " " + n2;
//    return PalabrasUnidas;

    if (n3==false) {
        console.log(n1 + " " + n2);
    } else {
        document.write(n1 + " " + n2);
    }
}

//var resultado = UnirPalabras(n1,n2);
//console.log(resultado);

UnirPalabras(n1,n2,true);