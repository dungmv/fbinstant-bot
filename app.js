require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var webhookRouter = require('./routes/webhook');
var instantWebhook = require('./routes/instantWebhook');
var apiRouter = require('./routes/api');
var apiDetectUserQuit = require('./routes/apiDetectUserQuitGame');

var app = express();

app.use(cors({}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/webhook', webhookRouter);
app.use('/instantWebhook', instantWebhook);
app.use('/apiDetectUserQuit', apiDetectUserQuit);
app.use('/api', apiRouter);

module.exports = app;
