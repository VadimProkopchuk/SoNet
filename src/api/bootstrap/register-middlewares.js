const bodyParser = require('body-parser');
const cors = require('cors');
const context = require('../middlewares/context');

module.exports = app => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(context());
};
