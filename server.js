// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { networkInterfaces } = require('os');

app.set('view engine', 'pug');

app.use(bodyParser.json());

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use('/', function (req, res) {
  const nets = networkInterfaces();
  const ip = nets.eth0[0].address;
  res.render('index', { title: `ip ${ip}`, message: ip })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
