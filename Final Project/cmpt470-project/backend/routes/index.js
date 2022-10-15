var express = require('express');
var router = express.Router();
// var dbtest = require('../mysqlcon');
// var sql = 'CREATE TABLE recipes';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.render('error', {message: err});
});
// dbtest.end();
module.exports = router;
