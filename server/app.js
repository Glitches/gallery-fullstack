const Express = require('express');
const app = Express();

const router = require('./router');
app.use('/', Express.static(__dirname + '/view')).use(router.router);

module.exports = { app };
