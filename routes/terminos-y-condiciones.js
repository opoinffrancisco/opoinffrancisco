var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('terminos-y-condiciones', { 
    nombre_autor: 'Ing.Francisco Ordoñez',
    title: `Terminos y condiciones`,
    title_content: 'Terminos y condiciones',
    descripcion_page : `
      Caida; Es un juego de cartas online de azar para que dos personas o más puedan sentirse cerca de quienes por algún motivo de la vida estén lejos, para conocer personas de forma aleatoria durante la partida, recordar épicos momentos de haber jugado con cartas físicas y crear nuevos hermosos momentos para la humanidad. ¡No solo buscamos unir a la gente que esta distante físicamente!
      Actualmente nos encontramos en la fase BETA, con las siguientes características;
      ✔ Se puede jugar a Caida de forma online contra otra persona que se encuentre en cualquier parte del mundo de forma aleatoria.
      ✔ Puedes enviarle una invitación a una amigo para poder jugar; Puedes enviarle un código o compartirlo en tus redes sociales. (El código es de 1 solo uso)
      ✔ Se puede hablar por chat con las personas con las que juegas
      ✔ Pueden disfrutar de competir con las personas que juegues, podrás ver quien se va superando y si ya eres mas top que ellos por medio del Ranking Para caidas junto al de ganar partidas    
    `,
    autor_page : 'opoinf.francisco'
  });
});

module.exports = router;
