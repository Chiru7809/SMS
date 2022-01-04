const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var markModel = require('../models/mark_Info.js');

router.post('/markadd', (request, response) => {
  console.log("request", request);
  var user = new markModel({
    SID: request.body.SID,
    SEMESTER: request.body.SEMESTER,
    COURSEID:request.body.COURSEID,
    MARK:request.body.MARK,
  
    
  });
  user.save().then(success => {
    console.log("Successfully created a mark details", success);
    var obj = {
        "statusCode": 200,
        "message": "Successfully added the marks",
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

router.get('/getStudentsMarkList', (request,response) => {
  markModel
  .find()
  .lean()
  .exec()
  .then(function (data){
    if (data){
      var obj= {
        "statuscode": 200,
        "message":"successfully getting marklist",
        "record": data

      };
      response.send(obj);
    }
  })
  .catch(function(error){
    let obj = {
      "statuscode":500,
      "message":error
    };
    response.send(obj);
  });
});

router.post('/getSemesterMarklist', (request,response) => {
  markModel
  .find({SEMESTER:request.body.SEMESTER})
  .lean()
  .exec()
  .then(function (data){
    if (data){
      var obj= {
        "statuscode": 200,
        "message":"successfully getting semester marklist",
        "record": data

      };
      response.send(obj);
    }
  })
  .catch(function(error){
    let obj = {
      "statuscode":500,
      "message":error
    };
    response.send(obj);
  });
});
router.post('/getCoursewiseMarklist', (request,response) => {
  markModel
  .find({COURSEID:request.body.COURSEID})
  .lean()
  .exec()
  .then(function (data){
    if (data){
      var obj= {
        "statuscode": 200,
        "message":"successfully getting coursewise marklist",
        "record": data

      };
      response.send(obj);
    }
  })
  .catch(function(error){
    let obj = {
      "statuscode":500,
      "message":error
    };
    response.send(obj);
  });
});


router.post('/getIndividualList', (request,response) => {
  markModel
  .find({SID:request.body.SID})
  .lean()
  .exec()
  .then(function (data){
    if (data){
      var obj= {
        "statuscode": 200,
        "message":"successfully getting student marklist",
        "record": data

      };
      response.send(obj);
    }
  })
  .catch(function(error){
    let obj = {
      "statuscode":500,
      "message":error
    };
    response.send(obj);
  });
});











module.exports = router;