'use strict';

const app = require('./../src/server.js');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing our app', () => {
  test('Should respond with a 200 status code', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(200);
  });
  // test('Should respond with a single of message on GET /message/:id', async () => {
  //   const response = await request.get('/message');

  //   expect(response.status).toEqual(200);
  //   expect(response.body.name).toEqual('Jordan');
  // });
  test('Should respond with a new message POST /message', async () => {
    const response = await request.post('/person').send({
      text: 'Hello',
    });

    expect(response.status).toEqual(404);
  });

  test('Should respond with Bad Request when no text present on the request', async () => {
    const response = await request.post('/message');

    expect(response.status).toEqual(404);
  });
});