const Routes = require('../routes');

module.exports = app => Routes.forEach(x => app.use(x.prefix, x.routes));
