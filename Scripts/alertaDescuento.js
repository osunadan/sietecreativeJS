// ----- ----- ----- ----- Código de descuento con Sweet Alert----- ----- ----- -----

setTimeout(() => {
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
}, 20000);
