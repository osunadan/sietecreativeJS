// ---------------- Variables ----------------
/* En las siguientes variables guardo el acceso a los elementos del DOM que se necesitan para ejecutar el codigo */
const videoPlayer = document.getElementById("videoPlayer");
const gallery = document.getElementById("photoGallery");
const BG = document.getElementById("BG");
const carousel = document.getElementById("carousel-inner");
const videoTag = document.getElementById("myVideo");
const botonPlay = document.querySelectorAll(".play-btn");
const botonStop = document.querySelectorAll(".close-btn");

// ---------------- Boton de cierre ----------------
/* For of que itera sobre el boton de cierre del video player y de la galeria de imagenes para agregarles un evento click */
for (i = 0; i < botonStop.length; i++) {
  botonStop[i].addEventListener("click", (e) => {
    const cierre = e.target.dataset.cierre;
    if (cierre == "cierre1") {
      videoPlayer.style.display = "none";
      videoTag.muted = "true";
      clearVideoTag();
      window.location.reload();
    } else if (cierre == "cierre2") {
      gallery.style.display = "none";
      clearCarouselTag();
      window.location.reload();
    }
  });
}

// ---------------- Importando data de JSON ----------------
/* Utilizo Fecth para traerme data necesaria para la construcción del HTML de caada material del portafolio, retornando una variable que tiene como valor esa data */
fetch("/Scripts/dataPortafolio.json")
  .then((res) => res.json())
  .then((data) => {
    return (sourceMateriales = data);
  });

// ---------------- Construyendo el HTML----------------
/* Con las siguientes 3 funciones se crea el HTML correspondiente para cada tipo de material en el portafolio */
function agregandoSourceVideos(source) {
  videoTag.innerHTML = `
   <source id="source01" src="../media/Video-${source.s1}" type="video/mp4">
   <source id="source02" src="../media/Video-${source.s2}" type="video/webm">
        <p>Tu navegador no soporta video HTML5. Aquí está el <a href=${source.enlace}>enlace del video</a>
        </p>
  `;
}

function agregandoSourceImagenes(source) {
  carousel.innerHTML = ` <div class="carousel-item active">
      <img src="../media/fotos--Portafolio/foto_${source.s1}" class="d-block w-100" alt="...">
     </div>
     <div class="carousel-item">
      <img src="../media/fotos--Portafolio/foto_${source.s2}" class="d-block w-100" alt="...">
     </div>
     <div class="carousel-item">
      <img src="../media/fotos--Portafolio/foto_${source.s3}" class="d-block w-100" alt="...">
     </div>
     <div class="carousel-item">
      <img src="../media/fotos--Portafolio/foto_${source.s4}" class="d-block w-100" alt="...">
     </div>
     <div class="carousel-item">
      <img src="../media/fotos--Portafolio/foto_${source.s5}" class="d-block w-100" alt="...">
     </div>`;
}

function agregandoSourceDesign(source) {
  carousel.innerHTML = ` <div class="carousel-item active">
      <img src="../media/design--Portafolio/${source.s1}" class="d-block w-100" alt="...">
     </div>
     <div class="carousel-item">
      <img src="../media/design--Portafolio/${source.s2}" class="d-block w-100" alt="...">
     </div>`;
}

// ---------------- Limpiando HTML ----------------
/* Las siguientes funciones son para dejar sin elementos a los elementos contenedores del video player y la galeria de imagenes una vez que se da click en el boton de cierre del video player o la galeria */
function clearVideoTag() {
  videoTag.innerHTML = "";
}

const clearCarouselTag = () => {
  carousel.innerHTML = "";
};

// ---------------- Visualización del portafolio----------------
/* Con el siguiente For of y los condicionales, se ejecutan las funciones que le agregan al video player y la galeria, el material de portafolio correspondiente a mostrar */
for (i = 0; i < botonPlay.length; i++) {
  botonPlay[i].addEventListener("click", (e) => {
    const material = e.target.dataset.material;
    if (material == "Video01") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio01-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[0]);
      BG.classList.add("darkBG");
    } else if (material == "Video02") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio02-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[1]);
      BG.classList.add("darkBG");
    } else if (material == "Video03") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio03-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[2]);
      BG.classList.add("darkBG");
    } else if (material == "Video04") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio04-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[3]);
      BG.classList.add("darkBG");
    } else if (material == "Video05") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio05-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[4]);
      BG.classList.add("darkBG");
    } else if (material == "Video06") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio06-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[5]);
      BG.classList.add("darkBG");
    } else if (material == "Gallery1") {
      gallery.style.display = "inline-block";
      agregandoSourceImagenes(sourceMateriales[6]);
      BG.classList.add("darkBG");
    } else if (material == "Gallery2") {
      gallery.style.display = "inline-block";
      agregandoSourceImagenes(sourceMateriales[7]);
      BG.classList.add("darkBG");
    } else if (material == "Design1") {
      gallery.style.display = "inline-block";
      agregandoSourceDesign(sourceMateriales[9]);
      BG.classList.add("darkBG");
    } else if (material == "Design2") {
      gallery.style.display = "inline-block";
      agregandoSourceDesign(sourceMateriales[8]);
      BG.classList.add("darkBG");
    }
  });
}
