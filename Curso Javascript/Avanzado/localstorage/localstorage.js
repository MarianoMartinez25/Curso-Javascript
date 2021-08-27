"use strict";

//Comprobar soporte

if(typeof (Storage)){
    console.log('Disponible');
}else{
    console.log('No disponible');
}

localStorage.setItem('clave','valor de la clave');
localStorage.setItem('edad','26');

var valor = localStorage.getItem('clave');
console.log(valor);

//Objeto json
var persona = {
    edad:26,
    nombre:'Mariano',
}

localStorage.setItem('persona',JSON.stringify(persona));

var per = JSON.parse(localStorage.getItem('persona'));

console.log(per.nombre);