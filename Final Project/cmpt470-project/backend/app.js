var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./mysqlcon')
var helmet = require('helmet')
const cors = require("cors");


var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');
var dbRouter = require('./routes/dbroutes');
var app = express();
const SERVER_PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);
app.use('/db', dbRouter);

module.exports = app.listen(SERVER_PORT, () => console.log(`db server is running on: http://localhost:${SERVER_PORT}`))