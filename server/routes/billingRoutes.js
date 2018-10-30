const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/payment', async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'USD',
      description: 'Upgrade to Premium',
      source: req.body.id
    });
  });
};
