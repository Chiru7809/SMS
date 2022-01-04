const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var courseModel = require('../models/course_Info.js');

router.post('/courseadd', (request, response) => {
  console.log("request", request);
  var user = new courseModel({
    COURSEID: request.body.COURSEID,
    COURSENAME: request.body.COURSENAME,
    DEPTID:request.body.DEPTID,
  });
  user.save().then(success => {
    console.log("Successfully created a new Course", success);
    var obj = {
        "statusCode": 200,
        "message": "Successfully created a new Course",
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
  












module.exports = router;