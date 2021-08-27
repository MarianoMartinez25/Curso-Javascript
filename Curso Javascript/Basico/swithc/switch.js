"use strict";

var edad = 20;
var texto = " ";

switch (edad) {
    case 17:
        texto = "No tiene 18 años";
    break;
    case 18:
        texto = "Eres mayor de edad";
    break;
    default:
        texto = "La edad no se encuentra en el rango consultado";
}

console.log(texto);