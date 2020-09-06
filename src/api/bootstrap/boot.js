const registerRoutes = require('./registerRoutes');
const connectToDatabase = require('./connect-to-db');
const runServer = require('./run-server');

module.exports = app => {
    registerRoutes(app);
    connectToDatabase(runServer.bind(this, app));
};
