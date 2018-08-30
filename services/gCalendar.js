const googleCalendarKey = require('../config/keys.js').googleCalendarKey;
const configKeys = require('../config/keys.js');
const {google} = require('googleapis');
const {OAuth2Client} = require('google-auth-library');
const refresh = require('passport-oauth2-refresh');
const User = require('../models/User.js');

let calendar = google.calendar('v3');

addEvent = (user, appointment, cb) => {
  let calRetries = 2;
  addToUserCalendar = () => {
    if(!calRetries){
      return;
    }
    calRetries--;
    let oauth2Client = new OAuth2Client(
      configKeys.googleClientID,
      configKeys.googleClientSecret
    );
    oauth2Client.credentials = {
      access_token: user.accessToken,
      refresh_token: user.refreshToken
    }
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
      cb(event.data.id);
    });
  }
  addToUserCalendar();
}

deleteEvent = (user, gCalendarId) => {
  let calRetries = 2;
  deleteFromUserCalendar = () => {
    if(!calRetries){
      return;
    }
    calRetries--;
    let oauth2Client = new OAuth2Client(
      configKeys.googleClientID,
      configKeys.googleClientSecret
    );
    oauth2Client.credentials = {
      access_token: user.accessToken,
      refresh_token: user.refreshToken
    }
    calendar.events.delete({
      auth: oauth2Client,
      calendarId: 'primary',
      eventId : gCalendarId
    }, function(err) {
      if (err) {
        if(err == "Error: Invalid Credentials" ||
            "Error: No access, refresh token or API key is set."){
          refresh.requestNewAccessToken('google', user.refreshToken, (err, accessToken) => {
            user.accessToken = accessToken;
            user.save().then(() => {
              deleteFromUserCalendar();
            })
          })
        }else{
          console.log('There was an error contacting the Calendar service: ' + err);
          return;
        }
      }
    });
  }
  deleteFromUserCalendar();
}

module.exports = {addEvent, deleteEvent}
