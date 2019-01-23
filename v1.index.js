const route = require('express').Router();
const images = require('./v1.images');

route.use('/images', images);

module.exports = route;