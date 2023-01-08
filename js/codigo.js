function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} // Funcion para numero aleatorio y despues quitarle los decimales, el rango se envia cuando se invoque la funcion
function eleccion(jugada){
    let resultado = ""
    if (jugada==1){
        resultado = "Piedra"
    }else if(jugada==2){
        resultado = "Papel"
    }else if(jugada==3){
        resultado = "Tijera"
    }else{
        resultado = "MAL ELEGIDO"
    }
    return resultado
}
function vencedor(usuario,maquina){
    if(maquina==usuario){
        alert("EMPATE")
    } else if(usuario == 1 && maquina == 3){
        alert("GANASTE")
        triunfos += 1
    }else if(usuario==2 && maquina== 1){
        alert("GANASTE")
        triunfos += 1
    }else if(usuario==3 && maquina== 2){
        alert("GANASTE")
        triunfos += 1
    }else{
        alert("PERDISTE")
        perdidas +=1
    }

}
// 1 Piedra, 2 papel, 3 tijera.
let jugador = 0 // se inicia en 0 para que la variable sea de tipo numerica
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos<3 && perdidas<3){
    pc = aleatorio(1,3) // llama la funcion y le envia el numero minimo y el numero maximo como parametro
    jugador = prompt("Elige: 1 Piedra, 2 Papel, 3 Tijera")
    alert(" PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))        
    vencedor(jugador,pc)  //COMBATE 
}
alert("Ganaste: " + triunfos + " veces, Perdiste: " + perdidas + " veces." )