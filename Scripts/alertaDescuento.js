// ----- ----- ----- ----- Código de descuento con Sweet Alert----- ----- ----- -----

/* Con proposito de practicar la Sugar Syntax, estoy usando un operador ternario para que cuando el codigo de descuento se ejecute, guarde en el Session Storage una propiedad que ayude a identificar que ya se ejecuto, asi no se vuelve a ejecutar si ya salio al menos una vez y en la consola queda registrado que ya se mostro. Pero si el usuario se va de la pagina y vuelve a entrar le saldra de nuevo */

sessionStorage.getItem("Descuento") === "true"
  ? console.log("El descuento ya se mostro al menos una vez")
  : setTimeout(() => {
      Swal.fire({
        title:
          "<strong>Obtén un 5% de descuento en tu primera contratación</strong>",
        html: "<p>Utiliza el cupón:</p><p>MIPRIMERSERVICIO</p><a class='btnDescuento' href='../pages/contacto.html' href='contacto.html'>¡Lo quiero!</a>",
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
        confirmButtonText: null,
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      });
      sessionStorage.setItem("Descuento", "true");
    }, 15000);
