var express = require("express");
var bodyParser = require('body-parser');
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var {result, authenticate} = require('../controllers/authenticate-controller');
var db = require('../database/db_connection');

process.env.SECRET_KEY = "thisismysecretkey";
console.log(result);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/api/authenticate',authenticate);
app.use('/secure-api',router);

// validation middleware
router.use(function(req,res,next){
    var token = req.body.token || req.headers['token'];
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,function(err,ress){
            if(err){
                res.status(500).send('Token Invalid');
            }else{
                console.log(token)
                next();
            }
        })
    }else{
        res.send('Please send a token')
    }
})
router.get('/home',function(req,res){
  
//    var sql="Select * INTO temp FROM user ALTER TABLE temp DROP COLUMN Password SELECT * FROM temp DROP TABLE";

      var sql="Select UserId, UserName, Email, Status from user";
      db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json(data);
      });   
})


app.listen(8012);