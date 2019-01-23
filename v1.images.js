const route = require('express').Router();

route.post('/', function(request, response) {
  response.send('image saved');
});

module.exports = route;