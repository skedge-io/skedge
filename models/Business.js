const mongoose = require('mongoose');
const { Schema } = mongoose;
// const twilioAcc = require('../config/keys.js').twilioAcc;
// const twilioAuth = require('../config/keys.js').twilioAuth;
// const twilio = require('twilio')(twilioAcc, twilioAuth);
// const schedule = require('node-schedule');
// let texts = require('../server.js').texts;
// const moment = require('moment');
const Appointment = require('./Appointment.js')
const campaigns = require('../services/campaigns.js');

const BusinessSchema = new Schema({
  name : String,
  admin : String,
  employees : [String],
  campaigns : [{
    name : String,
    text : String,
    when : String,
    active : Boolean
  }]
});

BusinessSchema.methods.createDefaultCampaigns = function createDefaultCampaigns(id){
  this.model('Business').findById(id).then((business) => {
    //Reminders
    business.campaigns.push({
      name : "Reminders",
      text : "Hi *name*, this is *business* reminding you of your appointment with *employee* at *time*",
      when : "1",
      active : false
    });
    //Reviews
    business.campaigns.push({
      name : "Reviews",
      text : "Hi *name*, did you enjoy your time at *business*? Let us know at (insert link)",
      when : "24",
      active : false
    });
    //Revisits
    business.campaigns.push({
      name : "Revisits",
      text : "Hi *name*, we hope you come back to *business*. Here's a discount for you at (insert link)",
      when : "30",
      active : false
    });
    //Promotions
    business.campaigns.push({
      name : "Promotions",
      text : "(Insert Promotion Here)",
      when : "2",
      active : false
    });
    business.save();
  })
}

//Activating A campaign
BusinessSchema.methods.activateCampaign = function activateCampaign(id, campaign){
  this.model('Business').findById(id).then((business) => {
    Appointment.find({business : id}).then((appointments) => {
      appointments.forEach((appointment) => {
        campaigns.setText(appointment, business, campaign);
      })
    });
  })
}

//Deactivating A campaign
BusinessSchema.methods.deactivateCampaign = function deactivateCampaign(id, campaign){
  this.model('Business').findById(id).then((business) => {
    //Get the right campaign
    // let campaignIndex = business.campaigns.map((Campaign) => {return Campaign.name; }).indexOf(campaign.name);
  })
}




const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;
