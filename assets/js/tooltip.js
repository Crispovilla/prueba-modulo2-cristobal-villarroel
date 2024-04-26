/**
 * Este script inicializa los componentes de tooltip y popover de Bootstrap en elementos específicos del DOM.
 *
 * Busca todos los elementos que tienen el atributo '[data-bs-toggle="tooltip"]' y crea una lista de disparadores de tooltip.
 * Luego, para cada disparador de tooltip encontrado, inicializa un nuevo objeto Tooltip de Bootstrap.
 * Esto permite que los elementos muestren tooltips cuando se interactúa con ellos.
 *
 * Similarmente, busca todos los elementos que tienen el atributo '[data-bs-toggle="popover"]' y crea una lista de disparadores de popover.
 * Para cada disparador de popover encontrado, inicializa un nuevo objeto Popover de Bootstrap.
 * Esto permite que los elementos muestren popovers cuando se interactúa con ellos.
 *
 * Estos componentes mejoran la experiencia del usuario al proporcionar información adicional o interactividad contextual.
 */

// Inicializar los Tooltips de Bootstrap
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Inicializar los Popovers de Bootstrap
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
