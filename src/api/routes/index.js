const defaultRoute = require('./default-route');
const userRoutes = require('./user-routes');

module.exports = [
    { prefix: '/', routes: defaultRoute },
    { prefix: '/user', routes: userRoutes },
];
