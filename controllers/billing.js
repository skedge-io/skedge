const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

  //make a payment
  app.post('/api/stripe', requireLogin, async (req, res) => {

  const charge = await stripe.charges.create({
      amount: 1995,
      currency: 'usd',
      description: '$19.95 for upgraded plan',
      source: req.user.business
    });

    req.user.plan = 'Premium';
    const user = await req.user.save();

    res.send(user);
  });
};
