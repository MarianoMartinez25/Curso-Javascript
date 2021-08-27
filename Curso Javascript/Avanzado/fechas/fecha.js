"use strict";

var fecha = new Date();
//console.log(fecha);

var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.getSeconds().toString();

console.log(hora+' '+minutos+' '+segundos);