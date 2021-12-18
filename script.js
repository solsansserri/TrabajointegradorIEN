var getData= function() {
    var nombreyapellido= document.getElementById("nombreyapellido").value;
    var correoelectronico= document.getElementById("correoelectronico").value;
    var mensaje= document.getElementById("mensaje").value;

    if(nombreyapellido == "") {
        document.getElementById("nombreyapellido").focus();
    } else {

    }

    if(correoelectronico == "") {
        document.getElementById("correoelectronico").focus();
    } else {
        
    }

    if(mensaje == "") {
        document.getElementById("mensaje").focus();
    } else {
        
    }


    console.log(nombreyapellido+" "+correoelectronico+" "+mensaje);

    document.getElementById("nombreyapellido").value = "";
    document.getElementById("correoelectronico").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("nombreyapellido").focus();
}

function mostrarMensaje() {
    var mensajes =document.getElementById("botonenviar").value;
    document.querySelector("h1").textContent = mensajes;
}
var formulario =document.querySelector("#formulario");
botonenviar.addEventListener("input", mostrarMensaje);