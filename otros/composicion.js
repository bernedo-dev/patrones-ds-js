// la idea es no usar herencia y usar composición con funciones pequeñas

const saludar = name => console.log(`Hola! soy ${name}`);
const despedir = () => console.log(`Adios!`);
const dormir = () => console.log('Zzzzzz.....');

class Persona {
    constructor(){
        this.nombre = 'lala'
    }

    saludar(){
        saludar(this.nombre)
    }

    despedir(){
        despedir();
    }

    dormir(){
        dormir();
    }
}
