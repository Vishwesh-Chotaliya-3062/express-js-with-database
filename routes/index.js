var express = require('express');
var {states, ascendingStateNames, descendingStateNames, stateNamesIn2020, stateNamesLengthSix, idByID, reverseName} = require('./states');
var router = express.Router();
var db = require('../database/db_connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WORLD' });
});

router.get('/states', function(req, res, next) {
  res.json(states);
});

router.get('/states/ascending', function(req, res, next) {
  res.json(ascendingStateNames);
});

router.get('/states/descending', function(req, res, next) {
  res.json(descendingStateNames);
});

router.get('/states/dateIn2020', function(req, res, next) {
  res.json(stateNamesIn2020);
});

router.get('/states/ID', function(req, res, next) {
  res.json(idByID);
});

router.get('/states/ID/:id', function(req, res, next) {
  const id = req.params.id;
  const statebyID = states.filter(s1 => s1.ID == id);
  const stateNamesByID = statebyID.filter(x => [x.ID,x.StateName]).map(x => ["ID: " + x.ID,"State Name: " + x.StateName]);
  res.json(stateNamesByID);
});

router.get('/states/Name/:name', function(req, res, next) {
  const name = req.params.name.trim();
  const statebyID = states.filter(s1 => s1.StateName.trim().toLowerCase() == name.toLowerCase());
  const stateNamesByID = statebyID.filter(x => [x.StateName, x.ID]).map(x => ["State Name: " + x.StateName,"ID: " + x.ID]);
  res.json(stateNamesByID);
});

router.get('/states/Reverse', function(req, res, next) {
  res.json(reverseName);
});

router.get('/states/LengthSixOrLess', function(req, res, next) {
  res.json(stateNamesLengthSix);
});



module.exports = router;
