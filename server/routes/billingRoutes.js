const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/payment', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'USD',
      description: 'Upgrade to Premium',
      source: req.body.id
    });

    req.user.isPremium = true;
    const user = await req.user.save();

    res.send(user);
  });
};
