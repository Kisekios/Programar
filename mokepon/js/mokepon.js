let ataqueJugador
let ataqueEnemigo

// FUNCION PARA INICIAR EL JS UNA VEZ EL NAVEGADOR HAYA CARGADO Y  ESCUCHADOR DE EVENTOS DE LOS BOTONES EN HTML
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)

    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener ("click", ataqueFuego)
    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener ("click", ataqueAgua)
    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.addEventListener ("click", ataqueTierra)
}
// FUNCIONES DE SELECCION DE MASCOTA JUGADOR/ENEMIGO
function selecionarMascotaJugador(){
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
        ataqueAleatorio = "Tierra"
    }
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)