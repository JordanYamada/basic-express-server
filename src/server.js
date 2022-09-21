'use strict';
const cors = require('cors');
const express = require('express');

const notFound = require('./error-handlers/404');
const logger = require('./middleware/logger');
const app = express(); 
app.use(cors());
app.use(express.json());

let people = {
  id: 1,
  name: 'Yams',
};

app.get('/', (request, response) => {
  try {
    response.status(200).send('Proof of life');
  } catch(e) {
    console.log(e);
  }
});

app.get('/person', logger, (request, response) => {
  response.send(people);
});

app.use(notFound);

module.exports = app;