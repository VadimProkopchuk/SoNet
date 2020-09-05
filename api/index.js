const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('SoNet API - ok!');
});

const server = app.listen(4000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server is ready and listening at http://%s:%s", host, port);
});
