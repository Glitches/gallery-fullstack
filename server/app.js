const Express = require('express');
const app = Express();

const router = require('./router');
app.use(router.router);

module.exports = { app };
