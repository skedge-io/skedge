const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username : String,
  business : String,
  password : String,
  googleId : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
