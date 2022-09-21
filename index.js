'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
  console.log('app is running');
});