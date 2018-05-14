"use strict";
const axios = require("axios");
const Express = require("express");
const router = Express.Router();

router
  .get("/getphotolist", async (req, res, next) => {
    try {
      const response = await axios.get(process.env.URL);
      console.log(response.data);
      const urlList = response.data.photos.photo.map(el => {
        return {
          title: el.title,
          id: el.id,
          url: `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${
            el.secret
          }_m.jpg`
        };
      });
      console.log(urlList);
      // const data = await response.json();
      res.send({ urlList });
      // res.send(200);
      next();
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  })
  .get("/photo:id", async (req, res, next) => {
    try {
      console.log(req.params);
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${
          process.env.KEY
        }&photo_id=${req.params.id}&format=json&nojsoncallback=1`
      );
      console.log(response.data);
      const resp = response.data;
      // const data = await response.json();
      res.send({ resp });
      // res.send(200);
      next();
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  });

module.exports = { router };
