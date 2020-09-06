const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { APP_PORT, DATABASE } = require('./config');

app.get('/', function (req, res) {
    res.send('SoNet API - ok!');
});

mongoose.connect(DATABASE.URI, { useNewUrlParser: true }, function () {
    console.log('Database is available.');

    app.listen(APP_PORT, function () {
        console.log(`Server is available on localhost:${APP_PORT}`);
    });
});
