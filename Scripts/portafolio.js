const videoPlayer = document.getElementById("videoPlayer");
const gallery = document.getElementById("photoGallery");
const carousel = document.getElementById("carousel-inner");
const videoTag = document.getElementById("myVideo");
const botonPlay = document.querySelectorAll(".play-btn");
const botonStop = document.querySelectorAll(".close-btn");

/*
function stopVideo() {
  videoPlayer.style.display = "none";
  gallery.style.display = "none";
  videoTag.muted = "true";
  clearVideoTag();
  window.location.reload();
}
*/

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

fetch("/Scripts/dataPortafolio.json")
  .then((res) => res.json())
  .then((data) => {
    return (sourceMateriales = data);
  });

/*
function agregandoFotos(source) {
 carousel.innerHTML = 
}
*/

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

function clearVideoTag() {
  videoTag.innerHTML = "";
}

const clearCarouselTag = () => {
  carousel.innerHTML = "";
};

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
    } else if (material == "Video02") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio02-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[1]);
    } else if (material == "Video03") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio03-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[2]);
    } else if (material == "Video04") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio04-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[3]);
    } else if (material == "Video05") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio05-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[4]);
    } else if (material == "Video06") {
      videoPlayer.style.display = "inline-block";
      videoTag.setAttribute(
        "poster",
        "../images/video-placeholder/portafolio06-placeholder.png"
      );
      agregandoSourceVideos(sourceMateriales[5]);
    } else if (material == "Gallery1") {
      gallery.style.display = "inline-block";
      agregandoSourceImagenes(sourceMateriales[6]);
    }
  });
}

/*
else if (material == "Cierre1") {
      videoPlayer.style.display = "none";
      gallery.style.display = "none";
      videoTag.muted = "true";
      clearVideoTag();
      window.location.reload();
    }
    */
