let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// FUNCION PARA INICIAR EL JS UNA VEZ EL NAVEGADOR HAYA CARGADO Y  ESCUCHADOR DE EVENTOS DE LOS BOTONES EN HTML
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectioReinicio = document.getElementById("reiniciar")
    sectioReinicio.style.display = "none"

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener ("click", ataqueFuego)
    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener ("click", ataqueAgua)
    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.addEventListener ("click", ataqueTierra)

    let botonReiniciar = document.getElementById ("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
// FUNCIONES DE SELECCION DE MASCOTA JUGADOR/ENEMIGO
function selecionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangosteya = document.getElementById('langosteya')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

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
    let seccionMensajes = document.getElementById("mensajes")
    
        let parrafo = document.createElement('p')
        parrafo.innerHTML = vencedor
        seccionMensajes.appendChild(parrafo)

        let botonFuego = document.getElementById ("boton-fuego")
        botonFuego.disabled = true
        let botonAgua = document.getElementById ("boton-agua")
        botonAgua.disabled = true
        let botonTierra = document.getElementById ("boton-tierra")
        botonTierra.disabled = true

        let sectioReinicio = document.getElementById("reiniciar")
    sectioReinicio.style.display = "block"
}

function crearMensaje(resultadoCombate){
let seccionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '-' + resultadoCombate
    seccionMensajes.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)