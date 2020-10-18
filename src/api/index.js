const express = require('express');
const app = express();
const boot = require('./bootstrap');
const server = require('http').createServer(app);

boot(app, server);
