let contenedorJuegos = document.getElementById('contenedor-juegos')
let closeModal 
let juegos = []
let opcionesJuegos
let ventanasE
let ventanasModal
class Juego{
    constructor(foto, nombre, descripcion, reqMin, reqRec){
        this.foto = foto
        this.nombre = nombre
        this.descripcion = descripcion
        this.reqMin = reqMin
        this.reqRec = reqRec
    }
}
let gtaV = new Juego('img/GtaV.jpg', 'GTA V', 'Juego educativo', 'Windows xp', 'Windows 11')
juegos.push(gtaV)
function mostrar(){
    juegos.forEach((juego) => {
        opcionesJuegos = 
        `<div class="nombre-juego"> 
            <img src=${juego.foto} alt=${juego.nombre} >
            <p> ${juego.nombre} </p>
        </div>
        <section class="modal">
        <div class="ventana-modal"> 
            <h2 class="modal__title">${juego.nombre} </h2>
            <img class="modal__img" src=${juego.foto} alt=${juego.nombre} >
            <p class="modal__paragraph">${juego.descripcion}</p>
            <div> 
                <h3>Requisitos minimos</h3>
                <p class="modal__paragraph">${juego.reqMin}</p>
                <h3>Requisitos recomendados</h3>
                <p class="modal__paragraph">${juego.reqRec}</p>
                <a class="modal__close" href="#" class="modal__close">Cerrar Modal</a>
            </div>
        </div>
        </section>`
        contenedorJuegos.innerHTML += opcionesJuegos
        ventanasModal = document.querySelectorAll('.nombre-juego')
        ventanasE = document.querySelector('.modal')
        closeModal = document.querySelector('.modal__close');
        ventanasModal.forEach((ventana) => {
            ventana.addEventListener('click', (e) => {
                e.preventDefault();
                ventanasE.classList.add('modal--show')
            })
            closeModal.addEventListener('click', (e) => {
                e.preventDefault();
                ventanasE.classList.remove('modal--show')
            })
        })
    })
}
window.addEventListener('load', mostrar)