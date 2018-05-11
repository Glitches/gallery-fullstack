const Express = require('express');
const app = Express();
const cors = require('cors');

const router = require('./router');
app
  .use(cors())
  .use('/', Express.static(__dirname + '/view'))
  .use(router.router);

module.exports = { app };
