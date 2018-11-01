
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  text: String,
  author: [String],
  shortSummary: String,
  image: [String],
  // in this section I have embedded the comments into the postSchema. This means that the comments are related to the posts.
  // I have also added an addedBy section which allows me to reference the post's user so that the comments and the user are connected.
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [{
    username: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User'},
    content: String
  }]
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
// Export the model for use elsewhere
// This is what will arrive when we say require('this file');
