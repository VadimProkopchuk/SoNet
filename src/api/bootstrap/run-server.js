const { APP_PORT } = require('../config')

module.exports = app => {
    app.listen(APP_PORT, function () {
        console.log(`Server is available on localhost:${APP_PORT}`);
    });
};
