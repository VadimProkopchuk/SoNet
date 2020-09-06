const { Router } = require('express');
const accountRoutes = Router();
const AuthService = require('../services/Account/AuthService')

accountRoutes.post('/auth', async (req, res) => {
    const { login, password } = req.body;
    try {
        const token = await AuthService.auth(login, password);
        res.json(token);
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
});

accountRoutes.post('/test', async (req, res) => {
    const { token } = req.body;
    res.json(await AuthService.getUserByToken(token))
})

module.exports = accountRoutes;
