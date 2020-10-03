const db = require('./db');
const jwt = require('./jwt');

module.exports = {
    APP_PORT: process.env.API_PORT,
    DATABASE: db,
    JWT: jwt
};
