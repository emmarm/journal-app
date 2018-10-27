const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = {
  app
};
