const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
  business : String,
  client : String,
  clientName : String,
  date : String,
  start : String,
  startTime: String,
  endTime: String,
  end : String,
  title : String,
  desc : String,
  employee : String,
  employee_id : String,
  phone : String,
  gCalendarId : String,
  active : {type : Boolean, default : true}
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
