const mongoose = require('mongoose');

const blogEntrySchema = mongoose.Schema({
  title: String,
  text: String,
  author: [String],
  image: [String]
});

const blogEntryModel = mongoose.model('Entry', blogEntrySchema);

module.exports = blogEntryModel;
