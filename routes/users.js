var express = require('express');
var router = express.Router();

var db=require('../database/db_connection');

router.get('/all-list', function(req, res, next) {
  
    const Sname = req.params.statename;

    var sql="SELECT user.userID, user.UserName, user.Email, states.StateID, user.Status, states.StateName, states.DateCreated, states.DateModified, vehicleregistration.VehicleID, vehicle.VehicleName, vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON user.UserID = vehicleregistration.UserID JOIN states ON states.StateID = user.StateID order by user.UserID";
  
    db.query(sql, function (err, data, fields) {
      if (err) throw err;
      res.json(data);
  });
});

router.get('/user-list/:username', function(req, res, next) {

    const Uname = req.params.username;

    var sql="SELECT vehicleregistration.UserID, user.UserName, vehicleregistration.VehicleID, vehicle.VehicleName, vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON user.UserID = vehicleregistration.UserID where user.UserName = '" + Uname + "'";

      db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json(data);
      });   
});

//To display selected info by passing statename
router.get('/state-list/:statename', function(req, res, next) {
  
    const Sname = req.params.statename;

    var sql = "SELECT states.StateID, states.StateName, vehicleregistration.VehicleID, vehicle.VehicleName, vehicleregistration.vehicleregistrationID, vehicleregistration.RegistrationDate, vehicleregistration.ExpiryDate from vehicle JOIN vehicleregistration ON vehicle.VehicleID = vehicleregistration.VehicleID JOIN user ON user.UserID = vehicleregistration.UserID JOIN states ON states.StateID = user.StateID where states.StateName = '"+ Sname +"'";
    
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json(data);
  });
});

module.exports = router;
