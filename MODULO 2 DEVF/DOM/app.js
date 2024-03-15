//1.
const formulario = document.querySelector('#mainForm')
const userName = document.querySelector('#name')
const userColor = document.querySelector('#colors')
const userScreen = document.querySelector('#userScreen')

//2 y 3.

formulario.addEventListener( 'submit', function (e){
    e.preventDefault()

    console.log(userName.value)
    console.log(userColor.value)

    userScreen.innerText = userName.value
    formulario.parentElement.style.backgroundColor = userColor.value 

    userName.value = ''
} )
