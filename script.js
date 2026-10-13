// ACT1
document.getElementById("url").textContent = window.location.href;
document.getElementById("navegador").textContent = window.navigator.userAgent;
document.getElementById("pantalla").textContent = window.screen.availHeight + "x" + window.screen.availHeight;
document.getElementById("idioma").textContent = window.navigator.language;


// ACT2
function mostrarDimensiones() {
    let exterior = window.outerWidth + "x" + window.outerHeight;
    let interior = window.innerWidth + "x" + window.innerHeight;
    window.alert("Interior: "+ interior+ " Exterior: "+ exterior)
}

// ACT3
function recargar(){
    window.location.reload();

}

function volver(){
    window.history.back();
}


//ACT4
let tiempo=30;
let temporizador;
function iniciar() {
    temporizador = setInterval(() => {
        document.getElementById("contador").textContent = ("Quedan "+tiempo+" segundos")
        tiempo--;
        if (tiempo == 0) {
            clearInterval(temporizador);
            alert("Se te acabo el tiempo");
        }
        }, 1000);
}

function detener() {
    clearInterval(temporizador);
}

//ACT%
function abrir() {
    window.open("https://google.com");
}

function cerrar() {
    window.close(); 
}

//ACT6
function fondo() {
    let quiereCambiar = confirm("¿Cambiar el color de fondo?"); 
    
    if (quiereCambiar) {
        let color = prompt("Dime un color (ej: red, blue):"); 
        if (color) { 
            document.body.style.backgroundColor = color; 
        }
    }
}

//ACT7
function saludar() {
    let nombre = prompt("Dime tu nombre:");
    if (nombre) {
        alert("Buenas tardes, " + nombre); 
    } else {
        alert("No se ha introducido un nombre."); 
    }
}

//ACT8
function comprobar() {
    let ancho = window.innerWidth;
    if (ancho < 768) {
        alert("Ventana pequeña. Ancho: " + ancho + "px");
    } else {
        alert("Ventana grande. Ancho: " + ancho + "px");
    }
}
