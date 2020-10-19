const ENV = process.env.ENV;

module.exports = {
    ENVIRONMENT_NAME: ENV || "development",
    IS_DEVELOPMENT_ENVIRONMENT: ENV === 'development',
    IS_STAGING_ENVIRONMENT: ENV === 'staging',
    IS_PRODUCTION_ENVIRONMENT: ENV === 'production',
};
