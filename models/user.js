const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  registerDate: Date,
  loginDate: Date
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
