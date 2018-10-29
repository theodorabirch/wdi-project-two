const Post = require('../models/post');

function indexRoute(req, res) {
  // Find all the posts, then render an ejs file:
  // Find returns an array
  Post.find().then(function(result) {
    const postObject = {
      posts: result
    };
    res.render('posts/index', postObject);
  });
  // This is what we previously did:
  // res.render('posts/index', postObject);
}

function newRoute(req, res) {
  res.render('posts/new');
}

function createRoute(req, res) {
  Post.create(req.body)
    .then(result => res.redirect(`/posts/${result._id}`));
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  // Get a post out of the database, using its ID
  // Get a particular post then render an ejs file
  Post.findById(req.params.id).then(result => {
    console.log('---------->', result);
    res.render('posts/show', result);
  });
}

function updateRoute(req, res) {
  // req.params.id is the id of the post we are trying
  // to update
  console.log(`Updating post id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // Redirect to the index (for now!)
      res.redirect('/posts');
    });
}

function editRoute(req, res) {
  // First get the post from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  Post.findById(req.params.id)
    .then(result => {
      res.render('posts/edit', result);
    });
}

function deleteRoute(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/posts'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
