let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;
let maximosIntentos = 3;

function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}


function verificarIntento () {
    let numeroDeUsuario = parseInt (document.getElementById ('valorUsuario').value);

    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
     return; 
} 

function limpiarCaja () {
    document.querySelector('#valorUsuario').value ='';
    
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p',' ya se asignaron todos los numeros posibles');
    } else{

           if (listaNumerosSorteados.includes(numeroGenerado)){
           return generarNumeroSecreto();
           } else {
           //si el numero elegido ya esta sorteado en lista
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
           }  
    }
}

function condicionesInicicales (){
    asignarTextoElemento ('h1','Juego del numero secreto');
    asignarTextoElemento ('p',`Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
        limpiarCaja();
        condicionesInicicales();
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
     

    }



condicionesInicicales ();