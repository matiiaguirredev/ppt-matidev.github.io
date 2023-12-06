let puntosUsuarios = 0;
let puntosPC= 0;

let instrucciones = document.querySelector("#instrucciones");
let ptscontenedorUsuarios = document.querySelector("#puntos-usuario");
let ptscontenedorPc = document.querySelector("#puntos-computadora");

let mensaje = document.querySelector("#mensaje");
let conteGanaPunto = document.querySelector("#gana-punto");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-compu");
let elegiTuArma = document.querySelector("#elegi-tu-arma");


let btnArmas = document.querySelectorAll(".arma");

btnArmas.forEach(btn => {
    btn.addEventListener("click",  iniciarTurno);
});


function iniciarTurno (e){

    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if (eleccionPc === 0){
        eleccionPc = "piedra🪨"
    } else if (eleccionPc === 1) {
        eleccionPc = "papel🧻"
    } else {
        eleccionPc = "tijera✂️"
    }

    if (
    (eleccionUsuario === "piedra🪨" && eleccionPc === "tijera✂️") || 
    (eleccionUsuario === "tijera✂️" && eleccionPc === "papel🧻")|| 
    (eleccionUsuario === "papel🧻" && eleccionPc === "piedra🪨")
    ) {
        ganaUsuario ();
    } else if (
        (eleccionPc === "piedra🪨" && eleccionUsuario === "tijera✂️") || 
        (eleccionPc === "tijera✂️" && eleccionUsuario === "papel🧻")|| 
        (eleccionPc === "papel🧻" && eleccionUsuario === "piedra🪨")) 
    {
        ganaPC ();
    } else {
        empate ();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText = eleccionPc;


    if (puntosUsuarios === 5 || puntosPC === 5) {

        if(puntosUsuarios === 5) {
            instrucciones.innerText = "🔥¡Ganaste el juego!.🔥"
        }
    
        if (puntosPC === 5) {
            instrucciones.innerText = "😭 Perdiste el juego. 😭"
        }

        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reuniciarJuego);

    }

}


function ganaUsuario () {
    puntosUsuarios ++;
    ptscontenedorUsuarios.innerText = puntosUsuarios;
    conteGanaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPC () {
    puntosPC++;
    ptscontenedorPc.innerText = puntosPC;
    conteGanaPunto.innerText = "La computadora gano esta vez 🤦‍♂️😭";

}

function empate () {
    conteGanaPunto.innerText = "Empate 🤦‍♂️";

}

function reuniciarJuego(){

    reiniciar.classList.add("disabled");
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuarios = 0;
    puntosPC= 0;

    ptscontenedorUsuarios.innerText = puntosUsuarios;
    ptscontenedorPc.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana! 😉";

    


}