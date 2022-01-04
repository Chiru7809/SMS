const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var departmentModel = require('../models/department_Info.js');

router.post('/deptadd', (request, response) => {
  console.log("request", request);
  
  var user = new departmentModel({
    DEPTID: request.body.DEPTID,
    DEPTNAME: request.body.DEPTNAME,
    DEPTINTAKE:request.body.DEPTINTAKE,
  });
  user.save().then(success => {
    console.log("Successfully created a new User", success);
    var obj = {
        "statusCode": 200,
        "message": "Successfully created a new Department",
        "record": success
    };
    response.send(obj);
  }).catch(error => {
    var obj = {
        "statusCode": 500,
        "message": error
    };
    response.send(obj);
  })
});


// router.get('/getDepartments', (req, res){
  
// })












module.exports = router;