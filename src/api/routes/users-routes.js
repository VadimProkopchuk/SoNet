const { Router } = require('express');
const usersRoutes = Router();

const authorize = require('../middlewares/authorize');
const { getAll } = require('../controllers/users');

usersRoutes.get('/', authorize(), getAll);

module.exports = usersRoutes;
