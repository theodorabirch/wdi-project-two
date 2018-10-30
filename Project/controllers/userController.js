const User = require('../models/user');


function userShow(req, res, next) {
  // In this section I am finding the id of the user by using the model.
  User
    .findById(req.params.id)
    // I am populating the user comments with their added posts and their comments
    .populate('comments addedPosts')
    .then(user => {
      // then I am rendering this in their profile.
      console.log(user.comments);
      res.render('profile', user);
    })
    .catch(err => {
      // the .catch uses err as a single argument and then this lets the user know that they have entered something incorrectly
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  userShow: userShow
};
