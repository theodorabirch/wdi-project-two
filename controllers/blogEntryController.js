const Entry = require('../models/blogEntry');

//THE INDEX ROUTE
function indexRoute(req, res) {
  // Find all the blog post entries, then render an ejs file:
  // Find returns an array so will need to export it as an object
  Entry.find().then(function(result) {
    const blogEntryObject = {
      // need to ask why we put the result here.... what does this mean????
      blogEntries: result
    };
    res.render('blogEntries/index', blogEntryObject);
  });
}

// THE SHOW ROUTE
function showRoute(req, res) {
  console.log('req.params is', req.params);
  // Get a particular entry out of the database, using its ID
  // Then will need to render its ejs file.
  Entry.findById(req.params.id).then(result => {
    // req.params.id is the id of the blog entry that is stored in the database
    res.render('blogEntries/show', result);
  });
}
// THE NEW ROUTE
function newRoute(req, res) {
  res.render('blog/new');
}

// THE CREATE ROUTE
// this allows you to create a new blog entry. It take the Entry model as its template
// it gets the data from the form in the ejs file. Then it takes the result and redirects you
// to the new blog entry with its ID.
function createRoute(req, res) {
  Entry.create(req.body)
    .then(result => res.redirect(`/blog/${result._id}`));
}

// THE UPDATE ROUTE
function updateRoute(req, res) {
  // req.params.id is the id of the blog entry we are trying
  // to update
  console.log(`Updating blog id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Entry.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/blog');
    });
}

// THE EDIT ROUTE
function editRoute(req, res) {
  // First get the blog entry from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  Entry.findById(req.params.id)
    .then(result => {
      res.render('blog/edit', result);
    });
}
//THE DELETE ROUTE
function deleteRoute(req, res) {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'));
}


module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute,
  editRoute: editRoute
};
