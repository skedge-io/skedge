const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  business : String,
  customer : String,
  date : String,
  time : String,
  notes : String,
  employee : String,
  employee_id : String,
  phone : String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
