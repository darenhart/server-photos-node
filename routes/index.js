var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/contact-list', function(req, res) {
  res.render('contact-list');
});
router.get('/about', function(req, res) {
  res.render('about');
});

module.exports = router;
