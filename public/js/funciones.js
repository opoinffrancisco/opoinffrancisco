window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date())

gtag('config', 'G-HP44YDVHH1')
$(document).ready(function () {
  // Habilitar todos los popovers
  $('[data-toggle="popover"]').popover({
    html: true
  })

  // Menu flotante
  /*var windowHeight1 = $(window).scrollTop();
  var contenido21 = $("#mostrar-opcionesflotantes").offset();

  contenido21 = contenido21.top;

  if (windowHeight1 >= contenido21) {

    //$('#OpcionesFlotantes').fadeIn("slow");
    jQuery("#OpcionesFlotantes").addClass('fade-in').removeClass('fade-out');

  }*/
  $(window).scroll(function () {


    var windowHeight = $(window).scrollTop();
    var contenido2 = $("#mostrar-opcionesflotantes").offset();

    contenido2 = contenido2.top;

    if (windowHeight >= contenido2) {

      //$('#OpcionesFlotantes').fadeIn("slow");
      jQuery("#OpcionesFlotantes").addClass('fade-in').removeClass('fade-out');

    } else {

      //$('#OpcionesFlotantes').fadeOut("slow");
      jQuery("#OpcionesFlotantes").removeClass('fade-in').addClass('fade-out');

    }


  });

  animateText(window.document.getElementById('textExample'));
});

function irProyectos() {
  document.getElementById("proyectos").scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function irConocimientos() {
  document.getElementById("conocimientos").scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function irPerfilLaboral() {
  document.getElementById("perfilLaboral").scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function irResumenHistorico() {
  document.getElementById("resumenHistorico").scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}

function irHistoria() {
  document.getElementById("historia").scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
}


function animateText(textArea) {
  let text = textArea.value;
  let to = text.length,
    from = 0;

  animate({
    duration: 1000 * 10,
    timing: quad,
    draw: function (progress) {
      let result = (to - from) * progress + from;
      textArea.value = text.substr(0, Math.ceil(result))
    }
  });
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 1)
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}