
const Entry = require('../models/blogEntry');

function createRoute(req, res) {
  Entry.findById(req.params.Id)
    .then(entry => {
      console.log('Creating a comment!', entry, req.body);
      // Add a rating to the cocktail's ratings array
      entry.comments.push(req.body);
      // Save this particular entry
      entry.save().then(() => res.redirect('/blogs'));
    });
}

function deleteRoute(req, res) {
  console.log('Deleting rating', req.params.commentId);
  // Redirect to the SHOW page
  Entry.findById(req.params.blogId)
    .then(entry => {
      // Find the rating by ID and remove it
      // .id here is a function:
      entry.comments.id(req.params.commentId).remove();
      // Now save this particular entry
      // and redirect to the show page
      entry.save()
        .then(() => res.redirect(`/blog/${req.params.blogId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
