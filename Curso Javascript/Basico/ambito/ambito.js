"use strict";

var global = "Variable Globla";

function MostrarConsola(){
    var variable_funcion="Variable dentro de la funcion";
    console.log(global);
    console.log(variable_funcion);
}

MostrarConsola();

console.log(global);
console.log(variable_funcion); //larga error porque se pide algo fuera de la funcion
 