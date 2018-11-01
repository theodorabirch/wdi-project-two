const express = require('express'); // Access the express package
const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const auth = require('./lib/auth');
const session = require('express-session');
const mongoose = require('mongoose');
const env = require('./config/environment');
const router = require('./config/routes');

mongoose.connect(env.dbUri);

const app = express();

// Use method override to change HTML form POST requests
// into other types of request like PUT
app.use(methodOverride('_method'));

// We need this to get the form data into req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Express session
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));

// Tell Express to use EJS when doing res.render
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Send static files like .js .css .png etc
// from the public folder:
app.use(express.static('public'));

// Respond to all requests, any method, any url:
app.use('*', auth.checkAuthStatus);
app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
