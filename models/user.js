const mongoose = require('mongoose');

// in  the user model we are creating virtuals. Virtuals are not stored as hard data
//in the database but as fields we can populate when we need them
//addedPosts is the name I am giving this field  so as to reference
// the model with the data we want.
// localField is the field in the model we want to look for and  foreignField is the field to
//look in within the other model

const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String
});

userSchema.virtual('comments', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'comments.user'
});

userSchema.virtual('addedPosts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'addedBy'
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
