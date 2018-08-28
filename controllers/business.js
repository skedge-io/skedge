let texts = require('../server.js').texts;
const Appointment = require('../models/Appointment');
const moment = require('moment');
const schedule = require('node-schedule');
const twilioAcc = require('../config/keys.js').twilioAcc;
const twilioAuth = require('../config/keys.js').twilioAuth;
const twilio = require('twilio')(twilioAcc, twilioAuth);


module.exports = (app, Business) => {

  //Set up Texts for Businesses
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
            let remindTime = moment(new Date(appointment.start)).subtract(business.campaigns[0].when, "hours").format("D MMMM, YYYY hh:mm A");
            texts[business._id]["Reminders"][appointment._id] = schedule.scheduleJob(remindTime, function(){
              twilio.messages.create({
                 body: business.campaigns[0].text,
                 from: '+15158002233',
                 to: `+1${appointment.phone}`
              })
            });
          })
        })
      }
    })
  })

  app.get('/api/current_business', (req, res) => {
    Business.findById(req.user.business).then((business) => {
      res.send(business);
    })
  })

  app.post('/api/campaigns/update', (req, res) => {
    Business.findById(req.user.business).then((business) => {
      //Update the correct campaign
      let campaignIndex = business.campaigns.map((campaign) => {return campaign.name; }).indexOf(req.body.name);
      business.campaigns[campaignIndex].text = req.body.text;
      business.campaigns[campaignIndex].when = req.body.when;
      let prevCampaignStatus = business.campaigns[campaignIndex].active;
      let activateCampaign = false;
      let deactivateCampaign = false;
      business.campaigns[campaignIndex].active = req.body.active;
      if(!prevCampaignStatus && req.body.active){
        activateCampaign = true;
      }else if(prevCampaignStatus && !req.body.active){
        deactivateCampaign = true;
      }
      business.save().then((business) => {
        if(activateCampaign){
          business.activateCampaign(business._id, business.campaigns[campaignIndex]);
        }else if(deactivateCampaign){
          business.deactivateCampaign(business._id, business.campaigns[campaignIndex]);
        }
        res.redirect('/dashboard/campaigns')
      });
    })
  })
}
