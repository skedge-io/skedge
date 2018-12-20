const Business = require('../models/Business');
const Client = require('../models/Client');
const reqLogin = require('../middlewares/requireLogin.js');


module.exports = (app) => {

  //grab one client - Done by Joe, refactor if needed 9/26/18
  app.get('/api/clients/:clientId', reqLogin, (req, res) => {
    Business.findById(req.user.business).then((business) => {
      Client.findById(req.params.clientId).then((client) => {
        res.send(client)
      })
    })
  });

  app.post('/api/clients/:clientId/edit', reqLogin, (req, res) => {
    Business.findById(req.user.business).then((business) => {
      Client.findById(req.params.clientId).then((client) => {
        client.name = req.body.name;
        client.phone = req.body.phone;
        client.notes = req.body.notes;
        client.save().then((client) => {
          //request done
        });
      });
    })
  })

  app.post('/api/clients/:clientId/delete', reqLogin, (req, res) => {
    Business.findById(req.user.business).then((business) => {
      Client.findOneAndRemove({_id : req.params.clientId}).then((client) => {
        let businessClientIndex = business.clients.indexOf(req.params.clientId);
        business.clients.splice(businessClientIndex, 1);
        business.save().then(() => {
          res.redirect('/dashboard/contacts');
        })
      })
    })
  })

}
