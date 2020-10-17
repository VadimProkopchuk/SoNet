module.exports = {
    SECRET: process.env.AUTH_JWT_SECRET || 'secret',
    EXPIRES_IN: process.env.AUTH_JWT_EXPIRES_IN || '24h'
};
