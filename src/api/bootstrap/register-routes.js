const Routes = require('../routes');

const registerRoutes = app => Routes.forEach(x => app.use(x.prefix, x.routes));

module.exports = registerRoutes;
