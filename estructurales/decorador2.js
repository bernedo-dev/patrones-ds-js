//2da forma de implementar decorador 
class Macbook {
    precio(){
        return 1000
    }
}

const agregarMemoria = mac => {
    const v = mac.precio()
    mac.precio = function(){
        return v + 100
    }
}

const macbook = new Macbook()
agregarMemoria(macbook)

console.log(macbook.precio());