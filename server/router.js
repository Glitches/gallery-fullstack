'use strict';
const axios = require('axios');
const Express = require('express');
const router = Express.Router();

router.get('/getPhotoList', async (req, res, next) => {
  const response = await axios.get(process.env.URL);
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
