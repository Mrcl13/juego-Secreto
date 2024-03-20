//Declaración de variables
let numeroSecreto = 0;
let numeroGenerado = 0;
let intentos = 0;
let numeroMaximo = 10;
//Arreglo
 let listaNumerosSorteados = [];

function asignarTextoELemento(elemento,texto){
    let elementoHTML = document.querySelector (elemento);
    //document.querySelector("<n_etiqueta") = conecta el elemento html con JS
    elementoHTML.innerHTML = texto;
    return;
}
function generarNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoELemento("p","Ya se sortearon todos los números posibles");
    }else{
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        // Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            //Recursividad
            return generarNumeroSecreto();
        }else{
            //Agrega al arreglo
            listaNumerosSorteados.push(numeroGenerado);
            //Retorna el número generado
            return numeroGenerado;
        }
    }
    
}
function limpiarCaja(){
    // let valorCaja = document.querySelector("#valorUsuario");
    // valorCaja.value = "";
    document.querySelector("#valorUsuario").value ="";
    return;
}

function condicionesIniciales(){
    asignarTextoELemento('h1','Juego del número secreto');
    asignarTextoELemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //document.getElementById("<nombreID>").value = obtiene valor de ID
    console.log(numeroSecreto);
    console.log(intentos);
    //Triple === asegura que debe ser igual en tipo y valor;
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoELemento("p",`Acertaste el número en ${intentos} ${(intentos===1)?"vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoELemento("p","El número secreto es menor");
        }else{
            asignarTextoELemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desahibilitar el boton Nuevo Juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}
condicionesIniciales();

