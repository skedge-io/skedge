const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  business : String,
  customer : String,
  start : String,
  end : String,
  title : String,
  desc : String,
  employee : String,
  employee_id : String,
  phone : String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
