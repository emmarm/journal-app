const express = require('express');
const bodyParser = require('body-parser');

require('./services/passport');

const app = express();
app.use(bodyParser.json());

require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = {
  app
};
