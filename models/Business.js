const mongoose = require('mongoose');
const { Schema } = mongoose;

const BusinessSchema = new Schema({
  name : String,
  admin : String,
  employees : [String],
});

const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;
