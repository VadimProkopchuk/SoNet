module.exports = {
    APP_PORT: process.env.API_PORT || 4000,
    DATABASE: require('./db'),
    JWT: require('./jwt'),
    ENVIRONMENT: require('./env')
};
