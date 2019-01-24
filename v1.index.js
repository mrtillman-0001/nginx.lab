const route = require('express').Router();
const avatars = require('./v1.avatars');

route.use('/avatars', avatars);

module.exports = route;