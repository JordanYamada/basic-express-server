const validator = (objects) => (request, response, next) => {
  let result = null;
  console.log(objects, request.params);
  for (let object of objects) {
    if (object.name === request.params.name) {
      result = object;
    }
  }
  if (!result) {
    next('no name found');
  } else {
    response.json(result);
  }
};

module.exports = validator;