const registerRoutes = require('./register-routes');
const connectToDatabase = require('./connect-to-db');
const runServer = require('./run-server');
const registerMiddlewares = require('./register-middlewares');

module.exports = app => {
    registerMiddlewares(app);
    registerRoutes(app);
    connectToDatabase(runServer.bind(this, app));
};
