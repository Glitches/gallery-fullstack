'use strict';
const axios = require('axios');
const Express = require('express');
const router = Express.Router();

router.get('/getPhotoList', async (req, res, next) => {
  const response = await axios.get(
    'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=8847401c31517199c53b73ed96da09e4&page=1&format=json&nojsoncallback=1'
  );
  const urlList = response.data.photos.photo.map(
    el =>
      `https://farm${el.id}.staticflickr.com/${el.farm}/${el.id}_${
        el.secret
      }_m.jpg`
  );
  console.log(urlList);
  // const data = await response.json();
  res.send({ urlList });
  // res.send(200);
  next();
});

module.exports = { router };
