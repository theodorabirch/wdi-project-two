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
router.get('/blog', blogEntryController.indexRoute);

// NEW Route: NOTE: This must appear
// above the show route, otherwise the show route
// will load with id = 'new'
router.get('/blog/new', secureRoute, blogEntryController.newRoute);

// Listen for POST requests to the blog
router.post('/blog', secureRoute, blogEntryController.createRoute);

// SHOW Route
router.get('/blog/:id', blogEntryController.showRoute);

// UPDATE route
router.put('/blog/:id', secureRoute, blogEntryController.updateRoute);

// EDIT route
router.get('/blog/:id/edit', secureRoute, blogEntryController.editRoute);

// DELETE Route
router.delete('/blog/:id', secureRoute, blogEntryController.deleteRoute);

// Rating CREATE route
router.post('/blog/:blogId/comments', secureRoute, commentController.createRoute);

// Rating DELETE route
router.delete('/blog/:blogId/comments/:commentId', secureRoute,
  commentController.deleteRoute);

// have to export everything so that the files are linked.
module.exports = router;
