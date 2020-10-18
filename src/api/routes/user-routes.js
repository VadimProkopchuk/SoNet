const { Router } = require('express');
const userRoutes = Router();

const authorize = require('../middlewares/authorize');
const { getUser } = require('../controllers/user');

userRoutes.get('/', authorize(), getUser);

module.exports = userRoutes;
