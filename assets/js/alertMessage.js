// Capturamos por id tanto el div que contiene la alerta y el boton que dispara la alerta
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const alertTrigger = document.getElementById("liveAlertBtn");

function alert(message, type) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
  alertTrigger.addEventListener("click", function () {
    alert("Mensaje enviado con éxito.", "success");
  });
}
