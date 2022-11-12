let contenedorJuegos = document.getElementById('contenedor-juegos') 
let closeModal 
let juegos = []
let opcionesJuegos
let ventanasE
let ventanasModal
let juegosAMostrar = [] 
let result = []
class Juego{
    constructor(foto, nombre, edad, genero, ram, tarjetaVideo, procesador, operSys, precio, requisitosRecomendados, enlaceDescarga){
        this.foto = foto
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
        this.ram = ram
        this.tarjetaVideo = tarjetaVideo
        this.procesador = procesador
        this.operSys = operSys
        this.precio = precio
        this.requisitosRecomendados = requisitosRecomendados
        this.enlaceDescarga = enlaceDescarga
    }
}
let gtaVI = new Juego('img/GtaV.jpg','GTA V','18','accion','4gb', 'NVIDIA 9800 GT 1GB', 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs)','Windows Vista 64 Bit Service Pack 2',
'94725','hola mundo','https://store.steampowered.com/agecheck/app/271590/?l=spanish%27')
let undertale = new Juego('img/undertale.png','Undertale','13','aventura','2 gb', 'None', 'None','Windows XP',
'COP 23.500','Procesador: 2 GHz+Memoria: 3 GB de RAM gráficos: 512MB','https://store.steampowered.com/app/391540/Undertale/?l=spanish%27')
let Minecraft = new Juego('img/minecraft.png','Minecraft','8','mundo abierto','2 GB', 'Intel HD Graphics', 'Intel Pentium D','Windows 98','130000','Intel Core i3, 4 GB','https://www.minecraft.net/es-es/store/minecraft-java-bedrock-edition-pc')
let lol = new Juego('img/lol.png','League of Legends','13','MOBA','2gb','NVIDIA GeForce 8600M GT','3 GHz','OS X 10.10','0','hola mundo 2.0','https://signup.leagueoflegends.com/es-mx/signup/redownload%27')
let wow = new Juego('img/wow.png','World of Warcraft','12','MMORPG','2gb','NVIDIA GeForce GT 440','Intel Core 2 Duo E8500','Windows XP','63766','hola mundo 3.0','https://www.blizzard.com/es-es/download?product=wow%27')
let l4d2 = new Juego('img/l4d2.png','Left 4 dead 2','18','terror','2gb','NVidia 6600','Pentium 4 3.0GHz','Windows 7','260000','hola mundo 4.0','https://store.steampowered.com/app/550/Left_4_Dead_2/?l=spanish%27')

juegos.push(gtaVI, undertale,Minecraft, lol, wow, l4d2)

function mostrar(){
    result.forEach((juego) => {
        opcionesJuegos = 
        `<div class="nombre-juego"> 
            <img src=${juego.foto} alt=${juego.nombre} >
            <p> ${juego.nombre} </p>
        </div>
        <section class="modal">
        <div class="ventana-modal"> 
            <h2 class="modal__title">${juego.nombre} </h2>
            <img class="modal__img" src=${juego.foto} alt=${juego.nombre} >
            <p class="modal__paragraph">${juego.enlaceDescarga}</p>
            <div> 
                <h3>Requisitos minimos</h3>
                <p class="modal__paragraph">${juego.reqMin}</p>
                <h3>Requisitos recomendados</h3>
                <p class="modal__paragraph">${juego.requisitosRecomendados}</p>
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

function filtrar() {
    let value = document.getElementById('age').value.toUpperCase()
    console.log(value)
    juegos.forEach((juego) => {
        if(value >= juego.edad) {
            console.log(juego.edad)
            console.log(juegosAMostrar)
            juegosAMostrar.push(juego)
        }
        if(value == 0){
            juegosAMostrar = []
            result = []
            contenedorJuegos.innerHTML = ""
        }
    })
    result = juegosAMostrar.filter((item,index)=>{
        return juegosAMostrar.indexOf(item) === index;
    })  
    console.log(juegosAMostrar)
    console.log(result)
    mostrar()
}
    document.getElementById('age').addEventListener('input', filtrar)
    