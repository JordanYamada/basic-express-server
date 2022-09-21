'use strict';
const cors = require('cors');
const express = require('express');

const notFound = require('./error-handlers/404');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const app = express(); 
app.use(cors());
app.use(express.json());
app.use(logger);

// let people = {
//   id: 1,
//   name: 'Yams',
// };

app.get('/', (request, response) => {
  try {
    response.status(200).send('Proof of life');
  } catch(e) {
    console.log(e);
  }
});

app.get('/person',  validator, (request, response) => {
  response.json({name : request.query.name});
});

app.use(notFound);

module.exports = {start: (port) => {
  app.listen(port, () => {
    console.log('App is running on port::' +port);
  });  
},
app,
};