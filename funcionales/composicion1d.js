
const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Sofía', apellido: 'Zapata'},
]

const compose = (...fns) => x => fns.reduceRight((y,f) => f(y),x)

const pipe = (...fns) => x => fns.reduce((y,f) => f(y),x)

const filter = f => xs => xs.filter(f)

const trace = x => y => console.log(x,y);

const head = xs => xs[0]

const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

// esta solucion es con pipe en vez de compose y con debug de traza
const traePrimerInfante = pipe(
    filter(x=> x.edad < 2),
    trace('despues de lala'),
    head,
    formateo,
    formato,
)

console.log(traePrimerInfante);