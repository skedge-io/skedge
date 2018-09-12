const reqLogin = require('../middlewares/requireLogin.js');
// const schedule = require('node-schedule');
//
// const twilioAcc = require('../config/keys.js').twilioAcc;
// const twilioAuth = require('../config/keys.js').twilioAuth;
// const googleCalendarKey = require('../config/keys.js').googleCalendarKey;
const configKeys = require('../config/keys.js');
// const twilio = require('twilio')(twilioAcc, twilioAuth);
// const moment = require('moment');


const {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');
const refresh = require('passport-oauth2-refresh');
const User = require('../models/User.js');
const Business = require('../models/Business.js');
const campaigns = require('../services/campaigns.js');
const gCalendar = require('../services/gCalendar.js');

// let texts = require('../server.js').texts;

module.exports = (app, Appointment) => {

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

    // This checks if an event was made from a form or by clicking on a specific day.
    if (req.body.employee) {
      // filled out form
      appointment.title =  req.body.employee + " <> " + req.body.customer
    } else {
      // Clicked on a specific day
      appointment.title = 'New Event'
      appointment.desc = ''
    }

    appointment.phone = req.body.phone;
    appointment.startTime = req.body.startTime;
    appointment.endTime = req.body.endTime;
    appointment.desc = req.body.desc;
    appointment.date = req.body.date;
    let startTimeLength = req.body.startTime.length;
    appointment.start = req.body.date + ' ' + req.body.startTime.substring(0, startTimeLength - 2) + " " + req.body.startTime.substring(startTimeLength - 2, startTimeLength);
    appointment.startDateString = new Date(appointment.start);
    let endTimeLength = req.body.endTime.length;
    appointment.end = req.body.date + ' ' + req.body.endTime.substring(0, endTimeLength - 2) + " " + req.body.endTime.substring(endTimeLength - 2, endTimeLength);
    appointment.endDateString = new Date(appointment.end);
    appointment.business = req.user.business;
    appointment.save(function(err, appointment){
      //Add to Business Text Campaign if active
      Business.findById(req.user.business).then((business) => {
        for(let i=0;i<2;i++){
          if(business.campaigns[i].active){
            campaigns.setText(appointment, business, business.campaigns[i]);
          }
        }
      })
      //Add to Calendar
      gCalendar.addEvent(req.user, appointment, (gCalendarId) => {
        appointment.gCalendarId = gCalendarId;
        appointment.save().then(() => {
          res.redirect('/');
        })
      })
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
    Appointment.findOneAndDelete({_id : req.params.id}).then((appointment) => {
      Business.findById(req.user.business).then((business) => {
        //Delete Campaign Reminders and Reviews
        for(let i=0;i<2;i++){
          campaigns.deleteText(req.params.id, business, business.campaigns[i]);
        }
        //Remove from Google Calendar
        gCalendar.deleteEvent(req.user, appointment.gCalendarId);
      })
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
