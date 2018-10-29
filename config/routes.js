const router = require('express').Router();
const blogEntryController = require('../controllers/blogEntryController');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const secureRoute = require('../lib/secureRoute');

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

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

// INDEX Route
router.get('/entries', cocktailController.indexRoute);

// NEW Route: NOTE: This must appear
// above the show route, otherwise the show route
// will load with id = 'new'
router.get('/cocktails/new', secureRoute, cocktailController.newRoute);

// Listen for POST requests to /cocktails
router.post('/cocktails', secureRoute, cocktailController.createRoute);

// SHOW Route
router.get('/cocktails/:id', cocktailController.showRoute);

// UPDATE route
router.put('/cocktails/:id', secureRoute, cocktailController.updateRoute);

// EDIT route
router.get('/cocktails/:id/edit', secureRoute, cocktailController.editRoute);

// DELETE Route
router.delete('/cocktails/:id', secureRoute, cocktailController.deleteRoute);

// Rating CREATE route
router.post('/cocktails/:cocktailId/ratings', secureRoute, ratingController.createRoute);

// Rating DELETE route
router.delete('/cocktails/:cocktailId/ratings/:ratingId', secureRoute,
  ratingController.deleteRoute);

// have to export everything so that the files are linked.
module.exports = router;
