// modulo revelador
const resultado = (()=>{
    const x = {}

    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})()


resultado.a();
resultado.b('queso', 'cabra')
resultado.a()
console.log(resultado.x); // no se puede acceder a x porque es privada