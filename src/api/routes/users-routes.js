const { Router } = require('express');
const usersRoutes = Router();

const authorize = require('../middlewares/authorize');
const { getAll, getById } = require('../controllers/users');

usersRoutes.get('/', authorize(), getAll);
usersRoutes.get('/:id', authorize(), getById);

module.exports = usersRoutes;
