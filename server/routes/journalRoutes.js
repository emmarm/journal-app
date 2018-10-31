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
};
