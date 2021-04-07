var jwt=require('jsonwebtoken');
var conn = require('../database/db_connection');

module.exports.authenticate=function(req,res){
    
  var password=req.body.password;
  var email=req.body.email;
  
    conn.query("SELECT * FROM user WHERE Email =  '" + email + "'", function (error, results, fields) { 
      
      result = results[0].UserName;
            
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            if(password==results[0].Password){
                var token=jwt.sign({data:results[0].Password},process.env.SECRET_KEY,{
                    expiresIn:50
                });
              
                res.json({
                    status:true,
                    token:token
                })
            }else{
                res.json({
                  status:false,                  
                  message:"Email and password does not match"
                 });
            }
        }
        else{
          res.json({
              status:false,
            message:"Email does not exits"
          });
        }
      }
    });
  
}

