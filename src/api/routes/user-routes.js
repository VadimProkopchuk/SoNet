const AuthService = require("../services/Account/AuthService");
const { Router } = require('express');
const userRoutes = Router();

userRoutes.get('/', async (req, res) => {

    const token = req.headers.authorization.replace('Bearer', '').trim();
    const user = await AuthService.getUserByToken(token);

    res.send(user);
});

module.exports = userRoutes;
