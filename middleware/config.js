var express = require("express");
var bodyParser = require('body-parser');
var jwt = require("jsonwebtoken");
var app = express();
var router = express.Router();
var {
    result,
    authenticate
} = require('../controllers/authenticate-controller');
var db = require('../database/db_connection');
var jwt_decode = require('jwt-decode');

process.env.SECRET_KEY = "thisismysecretkey";
console.log(result);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/api/authenticate', authenticate);
app.use('/secure-api', router);

// validation middleware
router.use(function (req, res, next) {
    var token = req.body.token || req.headers['token'];
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, function (err, ress) {
            if (err) {
                res.status(500).send('Token Invalid');
            } else {

                next();
            }
        })
    } else {
        res.send('Please send a token')
    }
})

router.get('/home', function (req, res) {

    var token = req.body.token || req.headers['token'];
    var decoded = jwt_decode(token);
    console.log(decoded);
    var username = decoded.data;

    var sql = "Select UserId, UserName, Email, Status from user where UserName = '" + username + "' ";
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json(data);
    });
})


app.listen(8012);