module.exports = {
    APP_PORT: process.env.API_PORT,
    DATABASE: require('./db'),
    JWT: require('./jwt'),
    ENVIRONMENT: require('./env')
};
