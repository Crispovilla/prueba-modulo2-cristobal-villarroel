/**
 * Esta función se ejecuta cuando el documento HTML ha sido completamente cargado y analizado.
 * Espera a que el DOM esté listo para manipular.
 *
 * Encuentra todos los elementos 'a' (enlaces) dentro del documento y agrega un evento clic a cada uno.
 * Cuando se hace clic en un enlace:
 * - Si el enlace tiene un atributo 'hash' no vacío, previene el comportamiento predeterminado del navegador.
 * - Obtiene el valor del 'hash' del enlace clickeado.
 * - Realiza una animación de desplazamiento suave para llevar al usuario a la posición del elemento en la página que coincide con el hash.
 * - Actualiza la URL del navegador con el hash correspondiente para mantener el historial de navegación.
 */

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
