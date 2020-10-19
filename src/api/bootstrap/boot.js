const socket = require('socket.io');
const registerRoutes = require('./register-routes');
const connectToDatabase = require('./connect-to-db');
const runServer = require('./run-server');
const registerMiddlewares = require('./register-middlewares');
const registerSockets = require("./registerSockets");

module.exports = (app, server) => {
    registerMiddlewares(app);
    registerRoutes(app);
    registerSockets(socket(server));
    connectToDatabase(runServer.bind(this, server));
};
