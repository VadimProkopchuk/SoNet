const db = require('./db');
const jwt = require('./jwt');

module.exports = {
    APP_PORT: 4000,
    DATABASE: db,
    JWT: jwt
};
