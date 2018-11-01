const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Journal = mongoose.model('journals');

module.exports = app => {
  app.post('/api/journals', requireLogin, async (req, res) => {
    const { ...fields } = req.body;

    const journal = new Journal({
      _creator: req.user.id,
      ...fields
    });

    const savedJournal = await journal.save();

    res.send(savedJournal);
  });

  app.get('/api/journals', requireLogin, async (req, res) => {
    const journals = await Journal.find({
      _creator: req.user.id
    }).exec();

    res.send(journals);
  });

  app.get('/api/journals/:id', requireLogin, async (req, res) => {
    const { id } = req.params;

    const foundJournal = await Journal.findOne({
      _id: id,
      _creator: req.user.id
    }).exec();

    if (!foundJournal) {
      return res.status(400).send({ error: 'Could not get journal entry.' });
    }

    res.send(foundJournal);
  });

  app.patch('/api/journals/:id', requireLogin, async (req, res) => {
    const { id } = req.params;
    console.log('id: ', id);

    if (!ObjectID.isValid(id)) {
      return res.status(400).send({ error: 'Could not handle request' });
    }

    const updates = req.body.filter(field => !!field);
    console.log('updates: ', updates);
    const updatedAt = new Date();
    console.log('updatedAt: ', updatedAt);

    try {
      const newJournal = await Journal.findOneAndUpdate(
        { _id: id, _creator: req.user.id },
        { $set: { ...updates, updatedAt } },
        { new: true }
      ).exec();

      if (!newJournal) {
        return res
          .status(400)
          .send({ error: 'Could not update journal entry.' });
      }

      res.send({ newJournal });
    } catch (err) {
      res.status(400).send({ error: 'Something went wrong' });
    }
  });

  app.delete('/api/journals/:id', requireLogin, async (req, res) => {
    const { id } = req.params;

    if (!ObjectID.isValid(id)) {
      return res.status(400).send({ error: 'Could not handle request' });
    }

    try {
      const deletedJournal = await Journal.findOneAndDelete({
        _id: id,
        _creator: req.user.id
      }).exec();

      if (!deletedJournal) {
        return res.status(404).send();
      }

      res.send(deletedJournal);
    } catch (err) {
      res.status(400).send({ error: 'Could not delete entry.' });
    }
  });
};
