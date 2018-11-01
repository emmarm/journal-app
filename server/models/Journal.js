const mongoose = require('mongoose');
const { Schema } = mongoose;

const journalSchema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: Date,
  journalType: {
    type: String,
    required: true,
    enum: ['default', 'kids'],
    default: 'default'
  },
  weather: {
    icon: {
      type: String
    },
    summary: String,
    temperatureHigh: Number,
    temperatureLow: Number
  },
  affirmation: String,
  didWell: String,
  gratefulFor: [String],
  improveTomorrow: String,
  learned: String,
  motivationalQuote: String,
  newWord: String,
  promiseToDo: String,
  wereGreat: [String],
  willMakeGreat: [String]
});

mongoose.model('journals', journalSchema);
