const defaultRoute = require('./default-route');
const userRoutes = require('./user-routes');
const accountRoutes = require('./account-routes');

module.exports = [
    { prefix: '/', routes: defaultRoute },
    { prefix: '/user', routes: userRoutes },
    { prefix: '/account', routes: accountRoutes }
];
