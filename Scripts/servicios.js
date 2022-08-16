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
let servicios = [];

// Creo cada uno de los objetos y los agrego al array
servicios.push(new servicio("fotografia", 2000, 4));
servicios.push(new servicio("video", 3500, 6));
servicios.push(new servicio("animacion", 6500, 10));
servicios.push(new servicio("diseño", 800, 3));

// Aquí guardo en una variable los resultados de busqueda que el usuario puede solicitar, buscandolos en los objetos que se encuentran en el array
let fotografia = servicios.find((servicio) => servicio.nombre === "fotografia");
let video = servicios.find((servicio) => servicio.nombre === "video");
let animacion = servicios.find((servicio) => servicio.nombre === "animacion");
let diseño = servicios.find((servicio) => servicio.nombre === "diseño");

// En esta variable guardo el prompt con el que el usuario indicara que tipo de servicio busca
/*
let busqueda = prompt(
  "¿Que tipo de servicio necesitas? (Fotografía, Video, Animacion, Diseño)"
);
*/

// Aquí guardo en variables el acceso a cada uno de los botones
let botonVideo = document.querySelector(
  "#contenedorServicios #contenedorBotones #botonVideo"
);
let botonFotografia = document.querySelector(
  "#contenedorServicios #contenedorBotones #botonFotografia"
);
let botonAnimacion = document.querySelector(
  "#contenedorServicios #contenedorBotones #botonAnimacion"
);
let botonDiseño = document.querySelector(
  "#contenedorServicios #contenedorBotones #botonDiseño"
);

// Aquí el aceso a los parrafos que mostraran a información
const parrafoPrecioEstimado = document.querySelector(
  "#contenedorServicios #contenedorBotones .precioEstimado"
);
const parrafoTiempoEstimado = document.querySelector(
  "#contenedorServicios #contenedorBotones .tiempoEstimado"
);
const parrafoPrecioIva = document.querySelector(
  "#contenedorServicios #contenedorBotones .precioConIva"
);

// Defino los eventos para cada boton
botonVideo.addEventListener("click", respuestaVideo);
botonFotografia.addEventListener("click", respuestaFoto);
botonAnimacion.addEventListener("click", respuestaAnimacion);
botonDiseño.addEventListener("click", respuestaDiseño);

// Defino la función para cada evento
function respuestaVideo() {
  console.log(video);
  parrafoPrecioEstimado.innerText =
    "Precio a partir de " + video.precioEstimado + " mxn";
  parrafoTiempoEstimado.innerText =
    "Tiempo estimado de entrega: " +
    "Minimo " +
    +video.tiempoEstimado +
    " días";
  parrafoPrecioIva.innerText =
    "El precio inicial con IVA seria " + Math.round(video.sumaIVA());
  console.log(
    "El precio inicial con IVA seria " +
      JSON.stringify(Math.round(video.sumaIVA()))
  );
}

function respuestaFoto() {
  console.log(fotografia);
  parrafoPrecioEstimado.innerText =
    "Precio a partir de " + fotografia.precioEstimado + " mxn";
  parrafoTiempoEstimado.innerText =
    "Tiempo estimado de entrega: " +
    "Minimo " +
    +fotografia.tiempoEstimado +
    " días";
  parrafoPrecioIva.innerText =
    "El precio inicial con IVA seria " + Math.round(fotografia.sumaIVA());
  console.log(
    "El precio inicial con IVA seria " +
      JSON.stringify(Math.round(fotografia.sumaIVA()))
  );
}

function respuestaAnimacion() {
  console.log(animacion);
  parrafoPrecioEstimado.innerText =
    "Precio a partir de " + animacion.precioEstimado + " mxn";
  parrafoTiempoEstimado.innerText =
    "Tiempo estimado de entrega: " +
    "Minimo " +
    +animacion.tiempoEstimado +
    " días";
  parrafoPrecioIva.innerText =
    "El precio inicial con IVA seria " + Math.round(animacion.sumaIVA());
  console.log(
    "El precio inicial con IVA seria " +
      JSON.stringify(Math.round(animacion.sumaIVA()))
  );
}

function respuestaDiseño() {
  console.log(diseño);
  parrafoPrecioEstimado.innerText =
    "Precio a partir de " + diseño.precioEstimado + " mxn";
  parrafoTiempoEstimado.innerText =
    "Tiempo estimado de entrega: " +
    "Minimo " +
    +diseño.tiempoEstimado +
    " días";
  parrafoPrecioIva.innerText =
    "El precio inicial con IVA seria " + Math.round(diseño.sumaIVA());
  console.log(
    "El precio inicial con IVA seria " +
      JSON.stringify(Math.round(diseño.sumaIVA()))
  );
}

/*
// Por ultimo con este switch se ejecuta la busqueda respecto a la entrada del usuario
switch (busqueda.toLowerCase()) {
  case "fotografia":
    console.log(fotografia);
    alert(JSON.stringify(fotografia.precioEstimado));
    alert(JSON.stringify(fotografia.tiempoEstimado));
    alert(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(fotografia.sumaIVA()))
    );
    console.log(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(fotografia.sumaIVA()))
    );
    break;

  case "video":
    console.log(video);
    alert(JSON.stringify(video.precioEstimado));
    alert(JSON.stringify(video.tiempoEstimado));
    alert(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(video.sumaIVA()))
    );
    console.log(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(video.sumaIVA()))
    );
    break;

  case "animacion":
    console.log(animacion);
    alert(JSON.stringify(animacion.precioEstimado));
    alert(JSON.stringify(animacion.tiempoEstimado));
    alert(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(animacion.sumaIVA()))
    );
    console.log(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(animacion.sumaIVA()))
    );
    break;

  case "diseño":
    console.log(diseño);
    alert(JSON.stringify(diseño.precioEstimado));
    alert(JSON.stringify(diseño.tiempoEstimado));
    alert(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(diseño.sumaIVA()))
    );
    console.log(
      "El precio inicial con IVA seria " +
        JSON.stringify(Math.round(diseño.sumaIVA()))
    );
    break;

  default:
    alert("Ingresa un valor correcto");
    break;
}
*/
