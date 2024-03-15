//Podemos declarar variables con let, var, const
let n = "nombre"
console.log(n)
console.log("Ejecutando...")
let edad = 34;
//Declaración y asignación
let paisOrigen = "Colombia"
//Sólo declaración de variable
let users //undefined
users = "mucha gente"

//Tipos de datos

let txt1 = "lorem ipsum"
let txt2 = 'Nuevo texto'
let txt3 = `Aqui hay ${users}`

console.log(txt3)

let recompensas = null

//typeof regresa el tipo de dato guardado en una variable
console.log(`Variable txt1 es un tipo de dato ${typeof txt1}`)

//Tipo de dato object
let iphone15 ={
procesador: 'miProcesador',
sizePantalla: '12',
ram: '8gb'
}

let pelicula ={
    nombre: 'resplandor',
    year: '1960',
    premios: null,
    director: 'Stanley Kubrick'
}

console.log(pelicula.nombre)

//Con template literals vamos a imprimir en consola el mensaje "El director del resplandor es Stanley Kubrick" 
console.log(`El director del resplandor es ${pelicula.director}`)

//operadores de incremento y decremento

let corazones = 5

corazones ++ //6
corazones++ //7

console.log ('Tienes: ' + corazones + ' vidas')// tienes 7 vidas

corazones--
console.log ('Tienes: ' +corazones + ' vidas')// tienes 6 vidas

corazones -= 4
console.log('Tienes: ' + corazones + ' vidas')//tienes 2 vidas

corazones += 2





/* 
// Ser descriptivos en la asignación de nombres de variables
//Esto es una mala práctica:
var dato = "hola"
var dato2 = 32
*/
