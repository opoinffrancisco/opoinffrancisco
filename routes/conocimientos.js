var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('testing', { 
    nombre_autor: 'Ing.Francisco Ordoñez',
    title: 'Conocimientos',
    title_content: 'Conocimientos',
    descripcion_page : `
    Ingeniero en informática especializado en el desarrollo de software. Con experiencias comprobables en el desarrollo web, escritorio e Hibrido para movíl.
  `,
  autor_page : 'opoinf.francisco'
  });
});

module.exports = router;
