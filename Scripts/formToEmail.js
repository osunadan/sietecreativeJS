// ----- ----- ----- ----- ----- Validación del formulario----- ----- ----- ----- -----
// Variables que guardan el acceso a cada elemento del formulario
const btn = document.getElementById("button");
const user_name = document.querySelector("#user_name");
const user_email = document.querySelector("#user_email");
const formContact = document.getElementById("form");
const error = document.querySelectorAll(".error");
const servicioVideoContacto = document.getElementById("flexRadioDefault1");
const servicioFotoContacto = document.getElementById("flexRadioDefault2");
const servicioMotionContacto = document.getElementById("flexRadioDefault3");
const servicioDesignContacto = document.getElementById("flexRadioDefault4");
const user_purpose = document.querySelector("#user_purpose");
const user_deadline = document.querySelector("#user_deadline");
const user_reference = document.querySelector("#user_reference");
const user_discount = document.querySelector("#user_discount");
let errorBucket = [];
// Evento con el que validamos el formulario, al cual le agregue las condiciones que permitiran el envio
formContact.addEventListener("submit", (e) => {
  errorBucket.length = 0;
  clearMessages();
  // Validación de nombre
  if (user_name.value < 1) {
    e.preventDefault();
    error[0].innerHTML = "El nombre es requerido";
    errorBucket.push("Error 1");
  }
  // Validación de email
  if (!emailIsValid(user_email.value)) {
    e.preventDefault();
    error[1].innerHTML = "Dirección de email invalida";
    errorBucket.push("Error 2");
  }
  // Validación de tipo de servicio
  if (
    servicioVideoContacto.checked == false &&
    servicioFotoContacto.checked == false &&
    servicioMotionContacto.checked == false &&
    servicioDesignContacto.checked == false
  ) {
    e.preventDefault();
    error[2].innerHTML = "Por favor escoge una opción";
    errorBucket.push("Error 3");
  }

  // Validación de proposito del proyecto
  if (user_purpose.value < 1) {
    e.preventDefault();
    error[3].innerHTML = "Este campo es requerido";
    errorBucket.push("Error 4");
  }

  // Validación de la fecha de entrega del proyecto
  if (user_deadline.value === "") {
    e.preventDefault();
    error[4].innerHTML = "Escogue una fecha valida";
    errorBucket.push("Error 5");
  }

  // Validación de proposito del proyecto
  if (user_reference.value < 1) {
    e.preventDefault();
    error[5].innerHTML = "Este campo es requerido";
    errorBucket.push("Error 6");
  }

  // Validación de codigo de descuento
  if (user_discount.value != "MIPRIMERSERVICIO") {
    e.preventDefault();
    error[6].innerHTML = "Este no es un codigo de descuento valido";
    errorBucket.push("Error 7");
  }

  // Envio de la info a la API

  if (errorBucket.length === 0) {
    e.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "service_vp2f6rg";
    const templateID = "template_nj5h474";

    emailjs.sendForm(serviceID, templateID, "#form").then(
      () => {
        btn.value = "Enviar";
        alert(
          "Mensaje enviado correctamente te enviaremos respuesta lo más pronto posible"
        );
      },
      function (err) {
        btn.value = "Enviar";
        alert(JSON.stringify(err));
      }
    );
  }
});

// --------- Funciones para la validación ----------
// Función que barre con los mensajes de error en caso de que se rellenen correctamente
function clearMessages() {
  for (let i = 0; i < error.length; i++) {
    error[i].innerText = "";
  }
}
// Función que valida el email
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

// --------------- Pre selección del tipo de servicio -------------

if (sessionStorage.getItem("servicio") === "video") {
  servicioVideoContacto.checked = true;
} else if (sessionStorage.getItem("servicio") === "foto") {
  servicioFotoContacto.checked = true;
} else if (sessionStorage.getItem("servicio") === "animacion") {
  servicioMotionContacto.checked = true;
} else if (sessionStorage.getItem("servicio") === "diseño") {
  servicioDesignContacto.checked = true;
}
