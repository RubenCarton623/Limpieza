function validar() {
	var resultado = true;
	var txtCompos = document.getElementById("comentariopositivo");
	var txtComneg = document.getElementById("comentarionegativo");
        var checkboxsSuscripcion = document.querySelectorAll(".sus");
	
	var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
        var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
	
	limpiarMensajes();
	
	//validacion para nombres
    if (txtCompos.value === '') {
        resultado = false;
        mensaje("Comentario es requerido", txtCompos);
    } else if (!letra.test(txtCompos.value)) {
        resultado = false;
        mensaje("Comentario solo debe contener letras", txtCompos);
    } else if (txtCompos.value.length > 150) {
        resultado = false;
        mensaje("Comentario maximo 150 caracteres", txtCompos);
    }
	
    if (txtComneg.value === '') {
        resultado = false;
        mensaje("Comentario es requerido", txtComneg);
    } else if (!letra.test(txtComneg.value)) {
        resultado = false;
        mensaje("Comentario solo debe contener letras", txtComneg);
    } else if (txtComneg.value.length > 150) {
        resultado = false;
        mensaje("Comentario maximo 150 caracteres", txtComneg);
    }
    
    //validacion de varios checkbox
    sel = false;
    for (let i = 0; i < checkboxsSuscripcion.length; i++) {
        if (checkboxsSuscripcion[i].checked) {
            sel = true;
            if (checkboxsSuscripcion[i].value === '2') {
                alert("Ha seleccionado el segundo checkbox"); 
           }
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("Debe seleccionar una suscripcion", checkboxsSuscripcion[0]);
    }
    
	return resultado;
}

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.innerHTML = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensaje");

    nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensaje");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }
}