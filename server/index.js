'use strict';
require('dotenv').config();

const Express = require('express');
const app = require('./app');

const server = Express();
const port = process.env.NODE_ENV === 'production' ? 4000 : 5000;

server.use(app.app).listen(port);
// eslint-disable-next-line no-console
console.log(`Server listening on port: ${port}`);
