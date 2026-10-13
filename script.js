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
