const { Router } = require('express');
const userRoutes = Router();

const authorize = require('../middlewares/authorize');

userRoutes.get('/', authorize(), async (req, res) => {
    const { user } = req.context;
    res.send(user);
});

module.exports = userRoutes;
