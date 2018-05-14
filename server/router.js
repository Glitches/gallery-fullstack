"use strict";
const Express = require("express");
const router = Express.Router();
const controller = require("./controllers/flickrController");

router
  .get("/getphotolist", controller.getPhotoThumbnails)
  .get("/photo:id", controller.getPhotoInfo);

module.exports = { router };
