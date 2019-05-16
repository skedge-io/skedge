const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const User = require('../models/User');


module.exports = app => {

  //make a payment
  app.post('/api/stripe', requireLogin, (req, res) => {

    stripe.charges.create({
      amount: 1995,
      currency: 'usd',
      description: '$19.95 for upgraded plan',
      source: req.body.id
    }).then(() => {
      User.findById(req.user.id).then((user) => {
        req.user.plan = 'Premium';
        req.user.save();
        res.send(user);
      })
    })
  });

};
