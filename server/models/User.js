const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  isPremium: {
    type: Boolean,
    default: false
  },
  settings: {
    journalType: {
      type: String,
      default: 'DEFAULT'
    }
  }
});

mongoose.model('users', userSchema);
