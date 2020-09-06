const { Router } = require('express');
const defaultRoute = Router();

defaultRoute.get('/', async (req, res) => {
    res.send('SoNet API v 0.1.0 - ok!');
});

module.exports = defaultRoute;
