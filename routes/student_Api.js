
const express = require("express")
var mongoose = require('mongoose');
const router = express.Router();
var studentModel = require('../models/student_Info.js');

router.post('/stdadd', (request, response) => {
  studentModel


 

  if(request.body.SID===""){
    var objecto={
      "statuscode":401,
      "message":"Student id should be here "
    };
    response.send(objecto);
    return;
  }
  if(request.body.FN===""){
    var objecto={
      "statuscode":401,
      "message":"FN should be here "
    };
    response.send(objecto);
    return;
  }
  console.log(request.body.FN.length);
  if(request.body.FN.length>20){
    var objecto={
      "statuscode":401,
      "message":"FN  should be only less than 20 "
    };
    response.send(objecto);
    return;
  }
  if(request.body.LN===""){
    var objecto={
      "statuscode":401,
      "message":"LN should be here "
    };
    response.send(objecto);
    return;
  }
  console.log(request.body.LN.length);
  if(request.body.LN.length>20){
    var objecto={
      "statuscode":401,
      "message":"LN  should be only less than 20 "
    };
    response.send(objecto);
    return;
  }

  if(request.body.DOB===""){
    var objecto={
      "statuscode":401,
      "message":"DOB should be here "
    };
    response.send(objecto);
    return;
  }
  var currentTime=new Date();
  var year=currentTime.getFullYear();
  console.log("YEAR",year-18);
  var DOB=request.body.DOB;
  var lastFour=DOB.substr(DOB.length-4);
  console.log(year-18,lastFour);

  if(lastFour>year-18){
    var objecto={
      "statuscode":401,
      "message":"AGE  should be 18 yrs "
    };
    response.send(objecto);
    return;
  }

  var currentTime=new Date();
  var year=currentTime.getFullYear();
  console.log("YEAR",year-25);
  var DOB=request.body.DOB;
  var lastFour=DOB.substr(DOB.length-4);
  console.log(year-25,lastFour);

  if(lastFour<year-25){
    var objecto={
      "statuscode":401,
      "message":"You are too old "
    };
    response.send(objecto);
    return;
  }

  if(request.body.YOJ===""){
    var objecto={
      "statuscode":401,
      "message":"YOJ should be here "
    };
    response.send(objecto);
    return;
  }

  var currentTime=new Date();
  var year=currentTime.getFullYear();
  console.log("YEAR",year)
  var YOJ=request.body.YOJ;

  if(YOJ>year){
    var objecto={
      "statuscode":401,
      "message":" YOJ cant be crossed current year "
    };
    response.send(objecto);
    return;
  }
  if(request.body.ADDRESS===""){
    var objecto={
      "statuscode":401,
      "message":"ADDRESS should be here "
    };
    response.send(objecto);
    return;
  }
  if(request.body.GENDER===""){
    var objecto={
      "statuscode":401,
      "message":"GENDER should be here "
    };
    response.send(objecto);
    return;
  }
  if(request.body.STATUS===""){
    var objecto={
      "statuscode":401,
      "message":"STATUS should be here "
    };
    response.send(objecto);
    return;
  }
  if(request.body.DEPTID ===""){
    var objecto={
      "statuscode":401,
      "message":"DEPTID should be here "
    };
    response.send(objecto);
    return;
  }
  
  
  if(request.body.PHONNUMBER == ""){
    var objecto={
      "statuscode":401,
      "message":"PHONE NUMBER should be here "
    };
    response.send(objecto);
    return;
  }
  if(request.body.PHONNUMBER.length!=10){
    var objecto={
      "statuscode":401,
      "message":"PHONENUMBER should be correct"
    };
    response.send(objecto);
    return;
  }


  if(request.body.DEPTID=="ME"|| request.body.DEPTID =="CS"|| request.body.DEPTID=="EC"){
    if(request.body.STATUS=="A" || request.body.STATUS=="I"){
      if(request.body.GENDER=="M"||request.body.GENDER=="F"){
        if(request.body.SEMESTER=="1st"||request.body.SEMESTER=="2nd"||request.body.SEMESTER=="3rd"||request.body.SEMESTER=="4th"||request.body.SEMESTER=="5th"||request.body.SEMESTER=="6th"||request.body.SEMESTER=="7th"||request.body.SEMESTER=="8th"){

    

    var user = new studentModel({
      SID: request.body.SID,
      FN: request.body.FN,
      LN:request.body.LN,
      DOB:request.body.DOB,
      YOJ:request.body.YOJ,
      SEMESTER:request.body.SEMESTER,
      GENDER:request.body.GENDER,
      ADDRESS:request.body.ADDRESS,
      PHONNUMBER:request.body.PHONNUMBER,
      DEPTID:request.body.DEPTID,
      STATUS:request.body.STATUS,
    });
  user.save().then(success => {
    console.log("Successfully created a new Student", success);
    var obj = {
        "statusCode": 201,
        "message": "Successfully created a new Student details",
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
}else{
  var objecto={
    "statuscode":401,
    "message":"SEMESTER should be  1st ,2nd ,3rd, 4th , 5th ,6th, 7th or 8th semseter "
  };
  response.send(objecto);
  return;
}
}else{
  var objecto={
    "statuscode":401,
    "message":"Gender should be M or F "
  };
  response.send(objecto);
  return;

}
}else{
  var objecto={
    "statuscode":401,
    "message":"STATUS should be only ACTIVE OR INACTIVE "
  };
  response.send(objecto);
  return;
}
}else{
  var objecto={
    "statuscode":401,
    "message":"DEPTID  should be only CS,EC,ME "
  };
  response.send(objecto);
  return;
}
});
  //aPI to get all checklist
  router.post('/getStudentList', (request,response) => {
    studentModel
    .findOne({SID:request.body.SID})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 202,
          "message":"successfully getting the students details",
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

  router.get('/getStudentsList', (request,response) => {
    studentModel
    .find()
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 202,
          "message":"successfully getting the students details",
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
      console.log(error);
    });
  });

  router.post('/deleteActiveUser', (request,response) => {
    studentModel.deleteOne({
      SID:request.body.SID
    })
    //.lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 202,
          "message":"successfully delete the student",
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

  router.post('/modifiedStudent',(request,response)=>{
    studentModel
    .findOne({SID:request.body.SID})
    // .lean()
    .exec()
    .then(function(success){
      if (success){
        console.log("successfully modified the data",success);
        success['FN']="chiru11";
        console.log("afterupdate",success);
        success.save().then(success => {
          console.log("Successfully update the details", success);
    var obj = {
        "statusCode": 202,
        "message": "Successfully update the details",
        "record": success
    };
    response.send(obj);
  })
  
        .catch(function(error){
          let obj = {
            "statuscode":500,
            "message":error
          };
          response.send(obj);
        
        });
      }
    })
  });













module.exports = router;