const sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
const sectionReinicio = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById ("boton-fuego")
const botonAgua = document.getElementById ("boton-agua")
const botonTierra = document.getElementById ("boton-tierra")
const botonReiniciar = document.getElementById ("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangosteya = document.getElementById('langosteya')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const seccionMensajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataques-jugador")
const ataquesEnemigo = document.getElementById("ataques-enemigo")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor (nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
//Objetos de la clase Mokepon
let hipodoge = new Mokepon ("Hipodoge", './assets/KDA.jpg', 5)
let capipepo = new Mokepon ("Capipepo", './assets/CHANGE.jpg',5)
let ratigueya = new Mokepon ("Ratigueya", './assets/Bunny.jpg',5)
let langosteya = new Mokepon ("Langosteya",'./assets/NEITH, MERCURY & ATHENA.jpg',5)
let tucapalma = new Mokepon ("Tucapalma", './assets/NAMI.jpg',5)
let pydos = new Mokepon ("Pydos", './assets/AMATERASU.jpg',5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '⛰️', id: 'boton-tierra'}
)

capipepo.ataques.push(
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'}
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'}
)

langosteya.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'}
)

tucapalma.ataques.push(
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '⛰️', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '⛰️', id: 'boton-tierra'}
)

pydos.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '⛰️', id: 'boton-tierra'}
)

// FUNCION PARA INICIAR EL JS UNA VEZ EL NAVEGADOR HAYA CARGADO Y  ESCUCHADOR DE EVENTOS DE LOS BOTONES EN HTML
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReinicio.style.display = "none"

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    botonFuego.addEventListener ("click", ataqueFuego)
    botonAgua.addEventListener ("click", ataqueAgua)
    botonTierra.addEventListener ("click", ataqueTierra)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}
// FUNCIONES DE SELECCION DE MASCOTA JUGADOR/ENEMIGO
function selecionarMascotaJugador(){   
    sectionSeleccionarMascota.style.display = "none" 
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else if (inputLangosteya.checked){
        spanMascotaJugador.innerHTML = "Langosteya"
    }else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
    }else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("Selecionado una mascota")
    } 
    selecionarMascotaEnemigo()
}

function selecionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,6)

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langosteya"
    }else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    }else {
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }
    combate()
}

function combate(){
    if(ataqueJugador==ataqueEnemigo){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    }else if(ataqueJugador== "Agua" && ataqueEnemigo== "Fuego"){
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    }else if(ataqueJugador== "Tierra" && ataqueEnemigo== "Agua"){
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("GANASTE")
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas(){
    if (vidasEnemigo== 0){
        mensajeResultado("GANASTE 🎉")
    }else if (vidasJugador==0){
        mensajeResultado("PERDISTE 😒")
    }
}

function mensajeResultado(vencedor){ 
    seccionMensajes.innerHTML = vencedor

    botonFuego.disabled = true      
    botonAgua.disabled = true  
    botonTierra.disabled = true
    sectionReinicio.style.display = "block"
}

function crearMensaje(resultadoCombate){
    let mensajeAtaqueJugador = document.createElement('p')
    let mensajeAtaqueEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultadoCombate
    mensajeAtaqueJugador.innerHTML = ataqueJugador
    mensajeAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(mensajeAtaqueJugador)
    ataquesEnemigo.appendChild(mensajeAtaqueEnemigo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)