var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { sequelize, Sequelize } = require('./src/models');
const router = require('./src/routes');
const cors = require('cors');
require('dotenv').config();

// sequelize.sync({ force: true });
// sequelize.sync();

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use(router);

app.listen(process.env.PORT || 5000);

module.exports = app;
