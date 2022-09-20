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

// Con este operador ternario el navegador mostrara el ultimo modo escogido por el usuario

localStorage.getItem("dark-mode") === "true"
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");
