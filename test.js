const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Sofía', apellido: 'Zapata'},
]

let val = users.reduce((a,b)=> { console.log(a,b); return a + b.edad},0);
console.log(val);