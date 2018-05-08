const Express = require('express');
const router = Express.Router();

router.get('/', (req, res, next) => {
    res.send('hello');
    next();
});

module.exports = { router };
