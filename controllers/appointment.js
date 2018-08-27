const reqLogin = require('../middlewares/requireLogin.js');
const schedule = require('node-schedule');

const twilioAcc = require('../config/keys.js').twilioAcc;
const twilioAuth = require('../config/keys.js').twilioAuth;
const googleCalendarKey = require('../config/keys.js').googleCalendarKey;
const configKeys = require('../config/keys.js');
const twilio = require('twilio')(twilioAcc, twilioAuth);

const {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');
const refresh = require('passport-oauth2-refresh');
const User = require('../models/User.js');




module.exports = (app, Appointment) => {

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
    let endTimeLength = req.body.endTime.length;
    appointment.end = req.body.date + ' ' + req.body.endTime.substring(0, endTimeLength - 2) + " " + req.body.endTime.substring(endTimeLength - 2, endTimeLength);
    appointment.business = req.user.business;
    appointment.save(function(err, appointment){
      let calRetries = 2;
      addToUserCalendar = () => {
        if(!calRetries){
          return;
        }
        calRetries--;
        User.findById(req.user._id).then((user) => {
          let oauth2Client = new OAuth2Client(
            configKeys.googleClientID,
            configKeys.googleClientSecret
          );
          oauth2Client.credentials = {
            access_token: user.accessToken,
            refresh_token: user.refreshToken
          }
          let calendar = google.calendar('v3');
          let startDate = new Date(appointment.start);
          let endDate = new Date(appointment.end);
          let newGoogleEvent = {
            'summary' : appointment.title,
            'start' : {
              'dateTime' : startDate,
              'timeZone': 'America/Los_Angeles',
            },
            'end' : {
              'dateTime' : endDate,
              'timeZone' : 'America/Los_Angeles'
            },
          }
          calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            resource: newGoogleEvent,
          }, function(err, event) {
            if (err) {
              if(err == "Error: Invalid Credentials" ||
                  "Error: No access, refresh token or API key is set."){
                refresh.requestNewAccessToken('google', user.refreshToken, (err, accessToken) => {
                  console.log(accessToken);
                  user.accessToken = accessToken;
                  user.save().then(() => {
                    addToUserCalendar();
                  })
                })
              }else{
                console.log('There was an error contacting the Calendar service: ' + err);
                return;
              }
            }
            res.redirect('/');
          });
        });
      }
      addToUserCalendar();
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
