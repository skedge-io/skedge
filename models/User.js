const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name : String,
  business : String,
  googleId : String,
  phone : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
