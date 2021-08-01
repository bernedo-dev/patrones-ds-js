// const suma =( a, b ) => a + b
//con currying queda asi:

const suma = a => b => a + b

const suma1 = suma(1)

const s = suma1(5)

console.log(s);

