// Express
const express = require('express');
const app = express();
app.use(express.static('public'));

//Port, routes and environment
const environment = require('./config/environment');
const port = environment.port;
const router = require('./config/routes');
const auth = require('./lib/auth');

//set up EJS and tell express to use EJS when doing res.render
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// Set up Mongoose
const mongoose = require('mongoose');
mongoose.connect(environment.dbUri);

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// express session
const session = require('express-session');
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));


app.use('*', auth.checkAuthStatus);
app.use('*', function(req, res, next) {
  console.log('Incoming request:', req.method, req.originalUrl);
  next();
});
app.use(router);

// this has to always be at the bottom
app.listen(port, () => console.log(`Listening for changes on port ${port}`));
