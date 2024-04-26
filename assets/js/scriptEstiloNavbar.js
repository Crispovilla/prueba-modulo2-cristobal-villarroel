window.addEventListener("scroll", function () {
  var navBg = document.querySelector(".navBg");
  var customContainer = document.querySelector(".custom-container");

  // Obtener la posición de desplazamiento
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 900) {
    // Si el usuario ha desplazado más de 100 píxeles desde la parte superior
    navBg.classList.remove("bg-transparent");
    navBg.classList.add("custom-nav-bg");
    customContainer.classList.remove("container");
    customContainer.classList.add("container-fluid");
  } else {
    // Si el usuario está cerca o en la parte superior de la página
    navBg.classList.remove("custom-nav-bg");
    navBg.classList.add("bg-transparent");
    customContainer.classList.add("container");
    customContainer.classList.remove("container-fluid");
  }
});
