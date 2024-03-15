let valor = NaN

console.log(Boolean(valor))

if ('') {
console.log(' Esto es truthy')
console.log(' Esto es truthy')
}else {
console.log ('tu valor es falsy')
}

//Las personas mayores de 18 años entran a la disco. Si la persona se llama Diego o Dante entra a VIP.
let userName = prompt('Dime tu nombre')
let edad = prompt('Dime tu edad')

if(edad >= 18){
    if(nombre == 'Diego' || nombre == 'Dante'){
        console.log('Entra a VIP pq tienes un nombre bn chingon')
    }else{
    console.log('Dale entra loco')
    }
    } else{
        
    console.log('Nah no puedes entrar, estas bn chamaco')
}
//Si tengo más de 28 años me visto de azul, si tengo menos de 28 me visto de rojo

let team = `Debes vestirte con camiseta ${edad >= 28 ? 'azul' : 'rojo'}`

console.log(team)









