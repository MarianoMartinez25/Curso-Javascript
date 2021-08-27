'use strict';

function Persona(edad, altura, peso) {
    this.edad   = edad;
    this.altura = altura;
    this.peso   = peso;

    this.caminar = ()=>{
        console.log('Esta caminando');
    }
    this.sentarse =()=>{
        console.log('Se sento');
    }
}

var Mariano     = new Persona(26,1.82,75);
console.log(Mariano.caminar());
