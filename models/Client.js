const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name : String,
  phone : String,
  previousAppointments : [String],
  nextAppointment : String,
  business : String,
  notes : String
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
