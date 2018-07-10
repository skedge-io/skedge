const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  business : String,
  customer_name : String,
  date : String,
  time : String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
