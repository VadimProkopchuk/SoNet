const mongoose = require('mongoose');
const { DATABASE } = require('../config');

module.exports = callback => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.connect(DATABASE.URI, options, function () {
        console.log('Database is available.');
        callback();
    });
};

