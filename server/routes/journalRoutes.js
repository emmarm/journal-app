const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');

const Journal = mongoose.model('journals');

module.exports = app => {
  app.post('/api/journals', requireLogin, async (req, res) => {
    const {
      journalType,
      affirmation,
      didWell,
      gratefulFor,
      improveTomorrow,
      learned,
      motivationalQuote,
      newWord,
      promiseToDo,
      wereGreat,
      willMakeGreat
    } = req.body;

    const journal = new Journal({
      _creator: req.user.id,
      journalType,
      affirmation,
      didWell,
      gratefulFor,
      improveTomorrow,
      learned,
      motivationalQuote,
      newWord,
      promiseToDo,
      wereGreat,
      willMakeGreat
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

  app.get('/api/journal/:id', requireLogin, async (req, res) => {
    const { id } = req.params;

    const foundJournal = await Journal.findOne({
      _id: id,
      _creator: req.user.id
    });

    if (!foundJournal) {
      res.status(400).send({ error: 'Could not get journal entry.' });
    }

    res.send(foundJournal);
  });
};
