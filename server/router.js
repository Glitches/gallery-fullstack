'use strict';

const Express = require('express');
const router = Express.Router();

router.get('/static', (req, res, next) => {
  res.send('hello');
  next();
});

module.exports = { router };
