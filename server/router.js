"use strict";
const axios = require("axios");
const Express = require("express");
const router = Express.Router();

router
  .get("/getPhotoList", async (req, res, next) => {
    try {
      const response = await axios.get(process.env.URL);
      console.log(response.data);
      const urlList = response.data.photos.photo.map(el => {
        return {
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
      const response = await axios.get(process.env.URL);
      console.log(response);
      const urlList = response.data.photos.photo.map(
        el =>
          `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${
            el.secret
          }_m.jpg`
      );
      console.log(urlList);
      // const data = await response.json();
      res.send({ urlList });
      // res.send(200);
      next();
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  });

module.exports = { router };
