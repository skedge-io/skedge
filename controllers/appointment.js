const reqLogin = require('../middlewares/requireLogin.js');
const schedule = require('node-schedule');

const twilioAcc = require('../config/keys.js').twilioAcc;
const twilioAuth = require('../config/keys.js').twilioAuth;
const twilio = require('twilio')(twilioAcc, twilioAuth);


module.exports = (app, Appointment) => {

  twilio.messages.create({
     body: `Test`,
     from: '+15158002233',
     to: `+19259631992`
  })

  let texts = {}
  //Schedule Texts for Appointments (Do this on server start)
  Appointment.find().then((appointments) => {
    appointments.forEach((appointment) => {
      texts[appointment._id] = schedule.scheduleJob(appointment.start, function(){
        twilio.messages.create({
           body: `${appointment.title}`,
           from: '+15158002233',
           to: `+1${appointment.phone}`
        })
      });
    })
  })

  // Get Specfic Appointment
  app.get('/api/appointment/:id', reqLogin, (req, res) => {
    Appointment.findById(req.params.id).then((appointment) => {
      res.send(appointment);
    })
  });

  //Create Appointments
  app.post('/api/appointment/new', reqLogin, (req, res) => {
    let appointment = new Appointment();
    appointment.customer = req.body.customer;
    appointment.employee = req.body.employee;
    appointment.employee_id = req.user._id;
    appointment.title = req.body.employee + " <> " + req.body.customer;
    appointment.phone = req.body.phone;
    appointment.startTime = req.body.startTime;
    appointment.endTime = req.body.endTime;
    appointment.desc = req.body.desc;
    appointment.date = req.body.date;
    let startTimeLength = req.body.startTime.length;
    appointment.start = req.body.date + ' ' + req.body.startTime.substring(0, startTimeLength - 2) + " " + req.body.startTime.substring(startTimeLength - 2, startTimeLength);
    let endTimeLength = req.body.endTime.length;
    appointment.end = req.body.date + ' ' + req.body.endTime.substring(0, endTimeLength - 2) + " " + req.body.endTime.substring(endTimeLength - 2, endTimeLength);
    appointment.business = req.user.business;
    appointment.save(function(err, appointment){
      //Twilio Text Message
      texts[appointment._id] = schedule.scheduleJob(appointment.start, function(){
        console.log("RUN");
        twilio.messages.create({
           body: `${appointment.title}`,
           from: '+15158002233',
           to: `+1${appointment.phone}`
        })
      });
      res.redirect('/');
    })
  });

  app.post('/api/appointment/edit/:id', reqLogin, (req, res) => {
    Appointment.findById(req.params.id).then((appointment) => {
      appointment.customer = req.body.customer;
      appointment.employee = req.body.employee;
      appointment.employee_id = req.user._id;
      appointment.title = req.body.employee + " <> " + req.body.customer;
      appointment.phone = req.body.phone;
      appointment.desc = req.body.desc;
      appointment.startTime = req.body.startTime;
      appointment.endTime = req.body.endTime;
      let startTimeLength = req.body.startTime.length;
      appointment.date = req.body.date;
      appointment.start = req.body.date + ' ' + req.body.startTime.substring(0, startTimeLength - 2) + " " + req.body.startTime.substring(startTimeLength - 2, startTimeLength);
      let endTimeLength = req.body.endTime.length;
      appointment.end = req.body.date + ' ' + req.body.endTime.substring(0, endTimeLength - 2) + " " + req.body.endTime.substring(endTimeLength - 2, endTimeLength);
      appointment.business = req.user.business;
      appointment.save(function(err, appointment){
        res.redirect('/dashboard');
      })
    })
  });

  app.post('/api/appointment/delete/:id', (req, res) => {
    Appointment.findOneAndDelete({_id : req.params.id}).then(() => {
      res.redirect('/dashboard');
    })
  })

  app.get('/api/appointments', reqLogin, (req, res) => {
    Appointment.find({employee_id : req.user._id})
    .then((appointments) => {
      res.send(appointments);
    })
  })

}
