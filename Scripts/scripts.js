// Acceso a los botones de los servicios
const btns = document.querySelectorAll(".btn");
// Acceso a cada una de las fichas se las muestras de trabajo
const servicios = document.querySelectorAll(".muestraServicios");

// Iteramos por cada boton y cada ficha para que segun el boton que este precionado, muestre las muestras correspondientes
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const filter = e.target.dataset.tipo;
    servicios.forEach((servicio) => {
      if (filter == "all") {
        servicio.style.display = "flex";
      } else {
        if (servicio.classList.contains(filter)) {
          servicio.style.display = "flex";
        } else {
          servicio.style.display = "none";
        }
      }
    });
  });
}

// Aquí estoy declarando un class, que sera el constructor de cada uno de los objetos que describen los servicios ofrecidos por la empresa
class servicio {
  constructor(nombre, precioEstimado, tiempoEstimado) {
    this.nombre = nombre;
    this.precioEstimado = precioEstimado;
    this.tiempoEstimado = tiempoEstimado;
  }

  sumaIVA() {
    return this.precioEstimado * 1.16;
  }
}

// Declaro un array que contendra cada uno de nuestros servicios
let serviciosInfo = [];

// Creo cada uno de los objetos y los agrego al array
serviciosInfo.push(new servicio("fotografia", 2000, 4));
serviciosInfo.push(new servicio("video", 3500, 6));
serviciosInfo.push(new servicio("animacion", 6500, 10));
serviciosInfo.push(new servicio("diseño", 800, 3));

// Aquí guardo en una variable el acceso al objeto correspondiente de cada servicio
let fotografia = serviciosInfo.find(
  (servicio) => servicio.nombre === "fotografia"
);
let video = serviciosInfo.find((servicio) => servicio.nombre === "video");
let animacion = serviciosInfo.find(
  (servicio) => servicio.nombre === "animacion"
);
let diseño = serviciosInfo.find((servicio) => servicio.nombre === "diseño");

// Acceso a los parrafos que contendran la info del servicio
const contenedorParrafo = document.querySelector(".infoServiciosContainer");

// Declaro una función con la que agregare el codigo HTML + el texto que cada servicio
function creandoInfoServicios(servicio) {
  contenedorParrafo.innerHTML = `<p class="precioEstimado infoItem"><strong>Precio a partir de: </strong> ${
    servicio.precioEstimado
  } mxn</p>
   <p class="tiempoEstimado infoItem"><strong>Tiempo estimado de entrega:</strong> Minimo
    ${servicio.tiempoEstimado}
     días</p>
   <p class="precioConIva infoItem"><strong>El precio inicial con IVA seria: </strong>${Math.round(
     servicio.sumaIVA()
   )}</p>`;
}

// Iteramos para que cada boton muestre la info correspondiente de cada servicio
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const filter = e.target.dataset.tipo;
    if (filter == "all") {
      contenedorParrafo.style.display = "none";
    } else if (filter == "video") {
      contenedorParrafo.style.display = "flex";
      creandoInfoServicios(video);
    } else if (filter == "foto") {
      contenedorParrafo.style.display = "flex";
      creandoInfoServicios(fotografia);
    } else if (filter == "animacion") {
      contenedorParrafo.style.display = "flex";
      creandoInfoServicios(animacion);
    } else if (filter == "diseño") {
      contenedorParrafo.style.display = "flex";
      creandoInfoServicios(diseño);
    } else {
      console.log("error");
    }
  });
}

// ----- ----- ----- ----- ----- Boton Dark Mode ----- ----- ----- ----- -----
// Dentro del evento click, también agregue un condicional para guardar en el localStorage cuando el usuario activo el dark mode o lo desactivo

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Con este condicional el navegador mostrara el ultimo modo escogido por el usuario
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

// ----- ----- ----- ----- ----- Codigo de descuento ----- ----- ----- ----- -----

setTimeout(() => {
  Swal.fire({
    title:
      "<strong>Obten un 5% de descuento en tu primer contratación</strong>",
    html: "<p>Utiliza el cupon:</p><p>MIPRIMERSERVICIO</p><a class='btnDescuento' href='contacto.html'>¡Lo quiero!</a>",
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    showConfirmButton: false,
    confirmButtonText: null,
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
  });
}, 2000);
