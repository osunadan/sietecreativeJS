// Acceso a los botones de los servicios
const btns = document.querySelectorAll(".btn");
// Acceso a cada una de las fichas de las muestras de trabajo
const servicios = document.querySelectorAll(".muestraServicios");

// Iteramos por cada botón y cada ficha para que, según el botón que esté presionado, muestre los materiales correspondientes
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

// Aquí estoy declarando un class, que será el constructor de cada uno de los objetos que describen los servicios ofrecidos por la empresa
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

// Declaro un array que contendrá cada uno de nuestros servicios
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

// Acceso a los párrafos que contendrán la info del servicio
const contenedorParrafo = document.querySelector(".infoServiciosContainer");

// Declaro una función con la que agregaré el código HTML + el texto que cada servicio
const creandoInfoServicios = (servicio) => {
  contenedorParrafo.innerHTML = `<p class="precioEstimado infoItem"><strong>Precio a partir de: </strong> ${
    servicio.precioEstimado
  } mxn</p>
   <p class="tiempoEstimado infoItem"><strong>Tiempo estimado de entrega:</strong> Minimo
    ${servicio.tiempoEstimado}
     días</p>
   <p class="precioConIva infoItem"><strong>El precio inicial con IVA seria: </strong>${Math.round(
     servicio.sumaIVA()
   )}</p>
   <a href="contacto.html" class="botonContacto" data-tipo="paginaContacto">Lo quiero</a>`;
};

// Iteramos para que cada botón muestre la info correspondiente de cada servicio
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

// Con este "for of" guardo en el session storage el tipo de servicio que el usuario esté seleccionando ver con los botones de servicio, así cuando vaya a la página de contacto, saldrá marcado el radio button con el tipo de servicio que estaba viendo en la página Nuestro trabajo

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const filter = e.target.dataset.tipo;
    filter == "video" && sessionStorage.setItem("servicio", "video");
    filter == "foto" && sessionStorage.setItem("servicio", "foto");
    filter == "animacion" && sessionStorage.setItem("servicio", "animacion");
    filter == "diseño" && sessionStorage.setItem("servicio", "diseño");
  });
}
