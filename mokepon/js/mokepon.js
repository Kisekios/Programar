const sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
const sectionReinicio = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById ("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const seccionMensajes = document.getElementById("resultado")
const ataquesJugador = document.getElementById("ataques-jugador")
const ataquesEnemigo = document.getElementById("ataques-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let inputLangosteya 
let inputTucapalma 
let inputPydos 
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botones = []
let indexAtaqueEnemigo
let indexAtaqueJugador
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
let langosteya = new Mokepon ("Langosteya",'./assets/NEITH.jpg',5)
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
    { nombre: '💧', id: 'boton-agua'}
)

pydos.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '⛰️', id: 'boton-tierra'}
)

mokepones.push(hipodoge,capipepo,ratigueya,langosteya,tucapalma,pydos)

// FUNCION PARA INICIAR EL JS UNA VEZ EL NAVEGADOR HAYA CARGADO Y  ESCUCHADOR DE EVENTOS DE LOS BOTONES EN HTML
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon)=> {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        
        `
        contenedorTarjetas.innerHTML += opcionMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangosteya = document.getElementById("Langosteya")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")
    })

    sectionReinicio.style.display = "none"

    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}


// FUNCIONES DE SELECCION DE MASCOTA JUGADOR/ENEMIGO

function selecionarMascotaJugador(){   
    sectionSeleccionarMascota.style.display = "none" 
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if (inputLangosteya.checked) {
        spanMascotaJugador.innerHTML = inputLangosteya.id
        mascotaJugador = inputLangosteya.id
    }else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("Seleciona una mascota")
    } 
    extraerAtaques(mascotaJugador)
    selecionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre ){
          ataques =  mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById ("boton-fuego")
    botonAgua = document.getElementById ("boton-agua")
    botonTierra = document.getElementById ("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")
}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e) =>{
            if(e.target.textContent === "🔥"){
                ataqueJugador.push("FUEGO")
                boton.style.background = "#112f58"
            }else if (e.target.textContent === "💧"){
                ataqueJugador.push("AGUA")
                boton.style.background = "#112f58"
            }else {
                ataqueJugador.push("TIERRA")
                boton.style.background = "#112f58"
            }
            ataqueAleatorioEnemigo()
        } )
    })
}

function selecionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0,mokepones.length - 1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index] ){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }
        
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
    mensajeAtaqueJugador.innerHTML = indexAtaqueJugador
    mensajeAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

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