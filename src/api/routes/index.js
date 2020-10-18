const defaultRoute = require('./default-route');
const userRoutes = require('./user-routes');
const usersRoutes = require('./users-routes');
const accountRoutes = require('./account-routes');

module.exports = [
    { prefix: '/', routes: defaultRoute },
    { prefix: '/user', routes: userRoutes },
    { prefix: '/users', routes: usersRoutes },
    { prefix: '/account', routes: accountRoutes },
];
