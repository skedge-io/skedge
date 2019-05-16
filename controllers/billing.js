const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const User = require('../models/User');


module.exports = app => {

  //make a payment
  app.post('/api/stripe', requireLogin, (req, res) => {

  console.log('req', req);
  console.log('id', req.body.id)
  console.log('req.body', req.body)

  stripe.charges.create({
      amount: 1995,
      currency: 'usd',
      description: '$19.95 for upgraded plan',
      source: req.body.id
    }).then(() => {
      console.log('we made it')
      User.findById(req.user.id).then((user) => {
        req.user.plan = 'Premium';
        req.user.save();
        res.send(user);
      })
    })



  });
};
