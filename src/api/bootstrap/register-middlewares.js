const bodyParser = require('body-parser');
const cors = require('cors');
const extractContext = require('../middlewares/extractContext');

module.exports = app => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(extractContext());
};
