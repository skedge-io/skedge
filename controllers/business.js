module.exports = (app, Business) => {

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
      business.campaigns[campaignIndex].active = req.body.active;
      business.save().then((business) => {
        res.redirect('/dashboard/campaigns')
      });
    })
  })



}
