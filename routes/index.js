var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const sets={name:"abhi",nename:"kutta",oldname:"mone"}

  res.render('index', { sets });
  
});

module.exports = router;
