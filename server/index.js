"use strict";
require("dotenv").config();

const Express = require("express");
const app = require("./app");

const server = Express();
// in this case is just an example, so we can keep the same port
const port = process.env.NODE_ENV === "production" ? 5000 : 5000;

server.use(app.app).listen(port);
// eslint-disable-next-line no-console
console.log(`Server listening on port: ${port}`);
