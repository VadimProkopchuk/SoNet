const { APP_PORT } = require('../config')

module.exports = server => {
    server.listen(APP_PORT, function () {
        console.log(`Server is available on localhost:${APP_PORT}`);
    });
};
