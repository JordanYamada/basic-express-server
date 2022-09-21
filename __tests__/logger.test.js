'use strict';

const logger = require('../src/middleware/logger');

describe ('test logger middleware', () => {
  test('should log when called', () => {
    jest.spyOn(console, 'log');
    const request = {
      method: 'TEST',
      path: 'TEST',
    };
    const response = {};
    const next = jest.fn();
    logger(request,response,next);
    expect(console.log).toHaveBeenCalledWith('REQUEST METHOD: ' + request.method, + "REQUEST PATH: " + request.path);
  })
})