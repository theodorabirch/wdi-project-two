const router = require('express').Router();



// Render the layout.ejs file when the user requests the home page
router.get('/', function(req, res) {
  res.render('pages/home');
});

//Render the about page
router.get('pages/about', function (req, res){
  res.render('pages/about');
});

//Render the contact us page
router.get('pages/contact', function (req, res){
  res.render('pages/contact');
});
