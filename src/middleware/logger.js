const logger =(request, response, next) => {
  request.message = 'hello from logger';
  next();
};

module.exports = logger;