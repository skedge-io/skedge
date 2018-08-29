let texts = require('../server.js').texts;
const Appointment = require('../models/Appointment.js')
const twilioAcc = require('../config/keys.js').twilioAcc;
const twilioAuth = require('../config/keys.js').twilioAuth;
const twilio = require('twilio')(twilioAcc, twilioAuth);
const moment = require('moment');
const schedule = require('node-schedule');


filterMessage = (appointment, business, message) => {
  let newMessage = message.replace(/name/gi, appointment.customer);
  newMessage = newMessage.replace(/business/gi, business.name);
  newMessage = newMessage.replace(/time/gi, appointment.startTime);
  newMessage = newMessage.replace(/employee/gi, appointment.employee);
  newMessage = newMessage.replace(/\*/gi, '');
  return newMessage;
}

setText = (appointment, business, campaign) => {
  switch(campaign.name){

    case "Reminders":
      let remindTime = moment(new Date(appointment.start)).subtract(campaign.when, "hours").format("D MMMM, YYYY hh:mm A");
      let textMessage = filterMessage(appointment, business, campaign.text);
      texts[business._id]["Reminders"][appointment._id] = schedule.scheduleJob(remindTime, function(){
        twilio.messages.create({
           body: textMessage,
           from: '+15158002233',
           to: `+1${appointment.phone}`
        })
      });
      break;

  }
}

initBusinessCampaigns = (Business) => {
  Business.find().then((businesses)=>{
    businesses.forEach((business) => {
      texts[business._id] = {
        "Reminders" : {},
        "Reviews" : {},
        "Revisits" : {},
        "Promotions" : {}
      };
      //Reminders
      if(business.campaigns[0].active){
        Appointment.find({business : business._id}).then((appointments) => {
          appointments.forEach((appointment) => {
            setText(appointment, business, business.campaigns[0]);
          })
        })
      }
    })
  })
}

module.exports = {setText, initBusinessCampaigns}
