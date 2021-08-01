
const perro = {
    raza: 'Kilterrier',
    ladrar: function(){
        // esta no puede ser una arrow function porque ese tipo de funciones no tienen contexto de this, por lo tanto, 
        // no podriamos por ejemplo acceder a "raza" ya que nos daria un undefined
        console.log(`Guau!, soy un ${this.raza}`);
    }
}

const kiltro = Object.create(perro)

kiltro.ladrar();
console.log(kiltro);

kiltro.raza = "Super perro";

kiltro.ladrar();