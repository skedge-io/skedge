const Appointment = require('../models/Appointment');
const Client = require('../models/Client');
const campaigns = require('../services/campaigns.js');

module.exports = (app, Business) => {

  //Initalize the Campaigns (When server restarts)
  campaigns.initBusinessCampaigns(Business);

  app.get('/api/current_business', (req, res) => {
    Business.findById(req.user.business).then((business) => {
      //Get Clients of Business
      Client.find({'_id': { $in: business.clients}}).then((clients) => {
        res.send({
          business : business,
          clients : clients
        });
      })
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
      if(req.body.active){
        activateCampaign = true;
      }else if(!req.body.active){
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
