const f = (ruta, cb) => {
    // muuuuchas lineas de codigo despues
    const resultado = computacionPesada()
    cb(resultado)
}

const manejaResultado = (resultado) => {

}

f('/users', manejaResultado)