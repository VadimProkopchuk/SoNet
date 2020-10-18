const { Router } = require('express');
const accountRoutes = Router();
const { auth } = require('../controllers/account');

accountRoutes.post('/auth', auth);

module.exports = accountRoutes;
