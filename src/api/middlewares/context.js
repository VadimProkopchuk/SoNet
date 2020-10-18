const AuthService = require("../services/Account/AuthService");

const context = () => {
    return async (req, res, next) => {
        const authorization = req.headers.authorization || '';
        const token = authorization.replace('Bearer', '').trim();
        const context = {};

        if (token) {
            context.user = await AuthService.getUserByToken(token);
        }

        req.context = context;
        next();
    }
};

module.exports = context;
