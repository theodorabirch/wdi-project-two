const Entry = require('../models/blogEntry');

//The Index Route
function indexRoute(req, res) {
  // Find all the blog post entries, then render an ejs file:
  // Find returns an array so will need to export it as an object
  Entry.find().then(function(result) {
    const blogEntryObject = {
      // need to ask why we put the result here....
      blogEntries: result
    };
    res.render('blogEntries/index', blogEntryObject);
  });
}

// The Show route
function showRoute(req, res) {
  console.log('req.params is', req.params);
  // Get a particular entry out of the database, using its ID
  // Then will need to render its ejs file.
  Entry.findById(req.params.id).then(result => {
    // req.params.id is the id of the blog entry that is stored in the database
    res.render('blogEntries/show', result);
  });
}




module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute
};
