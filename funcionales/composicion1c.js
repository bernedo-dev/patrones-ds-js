
const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Sofía', apellido: 'Zapata'},
]

const compose = (...fns) => x => fns.reduceRight((y,f) => f(y),x)
const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`


// const traePrimerInfante = data => compose(
//     formato,
//     formateo,
//     head,
//     filter(x=> x.edad < 2)
// )(data)
// equivalente a lo siguiente

const traePrimerInfante = compose(
    formato,
    formateo,
    head,
    filter(x=> x.edad < 2)
)(users)

// console.log(traePrimerInfante);

// console.log(filter(x=>x.edad < 2)(users));

