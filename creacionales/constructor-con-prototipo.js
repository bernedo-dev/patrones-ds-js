// se utiliza menos espacio en memoria pero si se modifica el prototipo de un objeto se modificará para todas las instancias


class MiClase {
    constructor(){
        this.propiedad = 1;
        
    }

    metodo(){
        //soy un metodo de prototipo
    }
}

const instancia = new MiClase();
console.log(instancia);