const mongoose = require('mongoose');
const { DATABASE } = require('../config');

module.exports = callback => {
    mongoose.connect(DATABASE.URI, { useNewUrlParser: true }, function () {
        console.log('Database is available.');
        callback();
    });
};

