const route = require('express').Router();
const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

route.post('/', function(req, res) {

  const image = req.body;
  const dataUri = `data:image/${image.ext};base64,${image.data}`;
  
  cloudinary.v2.uploader.upload(dataUri, { 
      public_id: `avatar_${image.id}`, 
      tags: ['grav.client']
    }, (error, result) => {
      if(error) res.status(400).send('upload failed');
      res.send(result.url);
  });

});

module.exports = route;
