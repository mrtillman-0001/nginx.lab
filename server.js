const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { networkInterfaces } = require('os');

app.set('view engine', 'pug');

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/', function (req, res) {
  const nets = networkInterfaces();
  let ip;
  for(net in nets){
    nets[net].some(obj => {
      if(obj.family == "IPv4"){
        ip = obj.address;
        return true;
      }
    })
  }
  res.render('index', { title: `ip ${ip}`, message: ip });

});

const listener = app.listen(process.env.PORT || 8080, function() {
  console.log('magic is happening on port ' + listener.address().port);
});
