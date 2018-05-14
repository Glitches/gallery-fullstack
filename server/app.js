const Express = require("express");
const app = Express();
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./router");
app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use("/", Express.static(__dirname + "/view"))
  .use(router.router);

module.exports = { app };
