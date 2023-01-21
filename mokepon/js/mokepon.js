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

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

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
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botones = []
let indexAtaqueEnemigo
let indexAtaqueJugador
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackGround = new Image()
mapaBackGround.src = './assets/mokemap.png'
let alturaDeseada
let anchoDelMapa = window.innerWidth - 100
const anchoMaximoMapa = 1100

if (anchoDelMapa > anchoMaximoMapa){
    anchoDelMapa = anchoMaximoMapa - 100
}

alturaDeseada = anchoDelMapa * 40 / 80

mapa.width = anchoDelMapa
mapa.height = alturaDeseada

class Mokepon {
    constructor (nombre, foto, vida,fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio (0, mapa.width - this.ancho)
        this.y = aleatorio (0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
//Objetos de la clase Mokepon
let hipodoge = new Mokepon ("Hipodoge", './assets/KDA.jpg', 5,'./assets/KDA.jpg')
let capipepo = new Mokepon ("Capipepo", './assets/CHANGE.jpg',5, './assets/CHANGE.jpg')
let ratigueya = new Mokepon ("Ratigueya", './assets/Bunny.jpg',5, './assets/Bunny.jpg')
let langosteya = new Mokepon ("Langosteya",'./assets/NEITH.jpg',5, './assets/NEITH.jpg')
let tucapalma = new Mokepon ("Tucapalma", './assets/NAMI.jpg',5, './assets/NAMI.jpg')
let pydos = new Mokepon ("Pydos", './assets/AMATERASU.jpg',5, './assets/AMATERASU.jpg')

let hipodogeEnemigo = new Mokepon ("Hipodoge", './assets/KDA.jpg', 5,'./assets/KDA.jpg')
let capipepoEnemigo = new Mokepon ("Capipepo", './assets/CHANGE.jpg',5, './assets/CHANGE.jpg')
let ratigueyaEnemigo = new Mokepon ("Ratigueya", './assets/Bunny.jpg',5, './assets/Bunny.jpg')
let langosteyaEnemigo = new Mokepon ("Langosteya",'./assets/NEITH.jpg',5, './assets/NEITH.jpg')
let tucapalmaEnemigo = new Mokepon ("Tucapalma", './assets/NAMI.jpg',5, './assets/NAMI.jpg')
let pydosEnemigo = new Mokepon ("Pydos", './assets/AMATERASU.jpg',5, './assets/AMATERASU.jpg')

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '⛰️', id: 'boton-tierra'}
)

hipodogeEnemigo.ataques.push(
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

capipepoEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
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

langosteyaEnemigo.ataques.push(
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

tucapalmaEnemigo.ataques.push(
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

pydosEnemigo.ataques.push(
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
    sectionVerMapa.style.display = "none"

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
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
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
                boton.disabled = true  
            }else if (e.target.textContent === "💧"){
                ataqueJugador.push("AGUA")
                boton.style.background = "#112f58"
                boton.disabled = true  
            }else {
                ataqueJugador.push("TIERRA")
                boton.style.background = "#112f58"
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        } )
    })
}

function selecionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
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
        }else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")   
            victoriasJugador++   
            spanVidasJugador.innerHTML = victoriasJugador 
        }else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")    
            victoriasJugador++   
            spanVidasJugador.innerHTML = victoriasJugador  
        }
        else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")   
            victoriasJugador++   
            spanVidasJugador.innerHTML = victoriasJugador 
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    revisarVictorias()

}

function revisarVictorias(){
    if (victoriasJugador== victoriasEnemigo){
        mensajeResultado("EMPATE 😯")
    }else if (victoriasJugador > victoriasEnemigo){
        mensajeResultado("GANASTE 🎉")
    }else {
        mensajeResultado("PERDISTE 😒")
    }
}

function mensajeResultado(vencedor){ 
    seccionMensajes.innerHTML = vencedor
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

function pintarCanvas (){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackGround,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    langosteyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langosteyaEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)
    }
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowRight":
            moverDerecha()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
    
        default:
            break
    }
}

function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre ){
          return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    } 
    console.log(enemigo)
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    selecionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)