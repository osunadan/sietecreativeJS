// Aquí estoy declarando un class, que sera el constructor de cada uno de los objetos que describen los servicios ofrecidos por la empresa
class servicio {
  constructor(nombre, precioEstimado, precio, tiempoEstimado) {
    this.nombre = nombre;
    this.precioEstimado = "A partir de " + precioEstimado + " mxn";
    this.precio = precio;
    this.tiempoEstimado =
      "Tiempo estimado de entrega: " + "Minimo " + tiempoEstimado + " Días";
  }

  sumaIVA() {
    return this.precio * 1.16;
  }
}

// Declaro un array que contendra cada uno de nuestros servicios
let servicios = [];

// Creo cada uno de los objetos y los agrego al array
servicios.push(new servicio("fotografia", 2000, 2000, 4));
servicios.push(new servicio("video", 3500, 3500, 6));
servicios.push(new servicio("animacion", 6500, 6500, 10));
servicios.push(new servicio("diseño", 800, 800, 3));

// Aquí guardo en una variable los resultados de busqueda que el usuario puede solicitar, buscandolos en los objetos que se encuentran en el array
let fotografia = servicios.find((servicio) => servicio.nombre === "fotografia");
let video = servicios.find((servicio) => servicio.nombre === "video");
let animacion = servicios.find((servicio) => servicio.nombre === "animacion");
let diseño = servicios.find((servicio) => servicio.nombre === "diseño");

// En esta variable guardo el prompt con el que el usuario indicara que tipo de servicio busca
let busqueda = prompt(
  "¿Que tipo de servicio necesitas? (Fotografía, Video, Animacion, Diseño)"
);

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
