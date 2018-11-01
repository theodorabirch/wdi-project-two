const Post = require('../models/post');


function indexRoute(req, res, next) {
  // Find all the posts, then render an ejs file:
  // Find returns an array
  Post
    .find()
    .then(function(result) {
      const postObject = {
        posts: result
      };
      res.render('posts/index', postObject);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function newRoute(req, res) {
  res.render('posts/new');
}

function createRoute(req, res) {
  Post.create(req.body)
    .then(result => res.redirect(`/posts/${result._id}`));
}

function showRoute(req, res) {
  // Get a post out of the database, using its ID
  console.log('req.params is', req.params);
  Post.findById(req.params.id).then(result => {
    // Get a particular post then render an ejs file
    res.render('posts/show', result);
  });
}

function updateRoute(req, res) {
  // req.params.id is the id of the post we are trying
  // to update
  console.log(`Updating post id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect(`/posts/${result._id}`);
    });
}

function editRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .then(result => {
      res.render('posts/edit', result);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
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
