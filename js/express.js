var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var celular = document.getElementById("cell");
var postular = document.getElementsByClassName("postular");// retorna un arreglo
var terminosYcondiciones = document.getElementById("terminos");
var form = document.getElementById("formulario");
var listInputs = document.querySelectorAll(".form-cntrl");

//expresioness//
var letr = /^[a-z ,.'-]+$/i;
var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var num = /^[0-9]{10}$/g;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value === "" || nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Campo vacio*");
    condicion = false;
  }
  else if (!letr.test(nombre.value)){
    mostrarMensajeError("nombre", "Nombre inválido*");
    condicion = false;
  }
  if (apellido.value === "" || apellido.value.trim() == "") {
    mostrarMensajeError("apellido", "Campo vacio*");
    condicion = false;
  }
  else if (!letr.test(apellido.value)){
    mostrarMensajeError("apellido", "Apellido inválido*");
    condicion = false;
  }
  if (email.value === "" || email.value.trim() == "") {
    mostrarMensajeError("email", "Campo vacio*");
    condicion = false;
  }
  else if(!correo.test(email.value)){
    mostrarMensajeError("email", "E-mail inválido*");
    condicion = false;
  }
  if (
    celular.value === "" || celular.value.trim() == "") {
    mostrarMensajeError("cell", "Campo vacio*");
    condicion = false;
  }
  else if(celular.value.length !=10){
    mostrarMensajeError("cell", "Celular inválido*");
    condicion = false;
  }


    sel = false; 
    cont=0; 
    for (let i = 0; i < postular.length; i++) {
        if (postular[i].checked) {
            cont++;
            sel = true;
        }
    }
    if (!sel) {
        condicion = false;
        mostrarMensajeError("postular", "Debe seleccionar al menos una servicio a postular*");
    }
  

  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("terminos", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("terminos", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "SU SOLICITUD A SIDO ENVIADA!";
}
