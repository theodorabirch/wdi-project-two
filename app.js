const express = require('express');
const app = express();
const environment = require('./config/environment');
const port = environment.port;

//set up EJS
const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// Set up Mongoose
const mongoose = require('mongoose');
mongoose.connect(environment.dbUri);













// this has to always be at the bottom
app.listen(port, () => console.log(`Listening for changes on port ${port}`));
