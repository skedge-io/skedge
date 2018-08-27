let texts = require('../server.js').texts;
module.exports = (app, Business) => {

  //Set up Texts for Businesses
  Business.find().then((businesses)=>{
    businesses.forEach((business) => {
      texts[business._id] = {
        "Reminders" : {},
        "Reviews" : {},
        "Revisits" : {},
        "Promotions" : {}
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
