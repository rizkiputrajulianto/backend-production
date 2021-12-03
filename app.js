const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.set('port', process.env.port || 3000);

app.get('/', (req, res, next) => {
	res.send('<h1>Hello world<h1>');
});

module.exports = app;
