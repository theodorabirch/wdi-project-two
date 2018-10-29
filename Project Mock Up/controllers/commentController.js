const Post = require('../models/post');

function commentsCreateRoute(req, res) {
  console.log(req.body);
  Post.findById(req.params.postId)
    .then(post => {
      console.log('Creating a comment!', post, req.body);
      // Add a rating to the cocktail's ratings array
      post.comments.push(req.body);
      // Save this particular cocktail
      post.save().then(() => res.redirect(`/posts/${post.id}`));
    });
}

module.exports = {
  commentsCreateRoute: commentsCreateRoute
};
