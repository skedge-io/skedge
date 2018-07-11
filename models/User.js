const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name : String,
  business : String,
  googleId : String,
  phone : String,
  email : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
