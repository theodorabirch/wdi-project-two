
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  text: String,
  author: [String],
  image: [String],
  comments: [{
    username: String,
    content: String
  }]
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
