
document.getElementById('btn-login').addEventListener('click', login)
document.getElementById('btn-register').addEventListener('click', register)
window.addEventListener('resize', anchoPagina)
//declaracion de variables
let imgLogin = document.getElementById('logo-login')
let imgRegister = document.getElementById('logo-register')
let containerLoginRegister = document.querySelector(".container-login-register")
let form_login = document.querySelector(".form-login")
let form_register = document.querySelector(".form-register")
let boxBackLogin = document.querySelector(".box-back-login")
let boxBackRegister= document.querySelector(".box-back-register")
anchoPagina()
function register (){
    if(window.innerWidth > 850){
        form_register.style.display = 'block'
        containerLoginRegister.style.left = '410px'
        form_login.style.display = 'none'
        boxBackRegister.style.opacity = '0'
        boxBackLogin.style.opacity = '1'
        imgRegister.style.display = 'block'
    } else {
        form_register.style.display = 'block'
        containerLoginRegister.style.left = '0px'
        form_login.style.display = 'none'
        boxBackRegister.style.display = 'none'
        boxBackLogin.style.display = 'block'
        boxBackLogin.style.opacity = '1'
        imgRegister.style.display = 'block'
    }
}
function login (){
    if(window.innerWidth > 850){
        form_register.style.display = 'none'
        containerLoginRegister.style.left = '10px'
        form_login.style.display = 'block'
        boxBackRegister.style.opacity = '1'
        boxBackLogin.style.opacity = '0'
        imgLogin.style.display = 'block'
    } else {
        form_register.style.display = 'none'
        containerLoginRegister.style.left = '0px'
        form_login.style.display = 'block'
        boxBackRegister.style.display = 'block'
        boxBackLogin.style.display = 'none'
        imgLogin.style.display = 'block'
    }
}
function anchoPagina (){
    if(window.innerWidth > 850){
        boxBackLogin.style.display = 'block'
        boxBackRegister.style.display = 'block'
    } else {
        boxBackRegister.style.display = 'block'
        boxBackRegister.style.opacity = '1'
        boxBackLogin.style.display = 'none'
        form_login.style.display = 'block'
        form_register.style.display = 'none'
        containerLoginRegister.style.left = '0px'    
    }
}
