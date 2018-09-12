const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  business : String,
  customer : String,
  date : String,
  start : String,
  startTime: String,
  startDateString : String,
  endTime: String,
  end : String,
  endDateString : String,
  title : String,
  desc : String,
  employee : String,
  employee_id : String,
  phone : String,
  gCalendarId : String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
