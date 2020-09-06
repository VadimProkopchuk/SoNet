const { Router } = require('express');
const userRoutes = Router();

userRoutes.get('/', async (req, res) => {
    res.send('Ok');
});

module.exports = userRoutes;
