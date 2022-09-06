// ----- ----- ----- ----- ----- Boton de envio del formulario ----- ----- ----- ----- -----
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_nj5h474";

  emailjs.sendForm(serviceID, templateID, this).then(
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
});
