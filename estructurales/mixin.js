// mixin
let mixin = {
    saludar(){
        console.log(`Hola ${this.nombre}`);
    },
    despedir(){
        console.log(`chao ${this.nombre}`);
    }
};

// clase
class Usuario {
    constructor(nombre){
        this.nombre = nombre;
    }
}

// este patron permite agregar nuevas funcionalidades a una clase

// aumentamos el prototipo
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Rufino');
usuario.saludar();