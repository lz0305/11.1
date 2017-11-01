var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"lizhen"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  con.query('SELECT COUNT(*) FROM asd',function (err, rows, fields) {
      res.send(rows)
  })
});

router.get('/search', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    con.query('SELECT * FROM asd LIMIT 0,2',function (err, rows, fields) {
        res.send(rows)
    })
});

router.post('/sub', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    con.query('SELECT * FROM asd LIMIT '+(req.body.num-1)*2+',2',function (err, rows, fields) {
        console.log(req.body.num)
        res.send(rows)
    })
});
module.exports = router;
