let texts = require('../server.js').texts;
const Appointment = require('../models/Appointment.js')
const twilioAcc = require('../config/keys.js').twilioAcc;
const twilioAuth = require('../config/keys.js').twilioAuth;
const twilio = require('twilio')(twilioAcc, twilioAuth);
const moment = require('moment');
const schedule = require('node-schedule');


filterMessage = (appointment, business, message) => {
  let newMessage = message.replace(/\*name\*/gi, appointment.clientName);
  newMessage = newMessage.replace(/\*business\*/gi, business.name);
  newMessage = newMessage.replace(/\*time\*/gi, appointment.startTime);
  newMessage = newMessage.replace(/\*employee\*/gi, appointment.employee);
  newMessage = newMessage.replace(/\*notes\*/gi, appointment.desc);
  return newMessage;
}

setText = (appointment, business, campaign) => {
  let textMessage = filterMessage(appointment, business, campaign.text);
  switch(campaign.name){

    case "Reminders":
      let remindTime = moment(new Date(appointment.start)).subtract(campaign.when, "hours").format("D MMMM, YYYY hh:mm A");
      texts[business._id]["Reminders"][appointment._id] = schedule.scheduleJob(remindTime, function(){
        twilio.messages.create({
           body: textMessage,
           from: '+15158002233',
           to: `+1${appointment.phone}`
        })
      });
      break;

    case "Reviews":
      let reviewTime = moment(new Date(appointment.end)).add(campaign.when, "hours").format("D MMMM, YYYY hh:mm A");
      texts[business._id]["Reviews"][appointment._id] = schedule.scheduleJob(reviewTime, function(){
        twilio.messages.create({
           body: textMessage,
           from: '+15158002233',
           to: `+1${appointment.phone}`
        })
      });
      break;

  }
}

deleteText = (appointmentId, business, campaign) => {
  if(texts[business._id][campaign.name][appointmentId]){
    texts[business._id][campaign.name][appointmentId].cancel();
    delete texts[business._id][campaign.name][appointmentId];
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
      //Reminders and Reviews
      let presentTime = new Date();
      for(let i=0;i<2;i++){
        if(business.campaigns[i].active){
          Appointment.find({
            business : business._id,
          }).then((appointments) => {
            appointments.forEach((appointment) => {
              if(new Date(appointment.end) > presentTime){
                setText(appointment, business, business.campaigns[i]);
              }
            })
          })
        }
      }
    })
  })
}

module.exports = {setText, initBusinessCampaigns, deleteText}
