// chiru was good
const express = require("express");
var mongoose= require("mongoose");
const router = express.Router();
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var deptUi = require('./models/department_Info.js');
var deptApi = require('./routes/deprtment_Api.js');

var stdUi= require('./models/student_Info.js');
var stdApi= require('./routes/student_Api.js');

var courseUi= require('./models/course_Info.js');
var courseApi=require('./routes/course_Api.js');

var markUi=require('./models/mark_Info.js');
var markApi=require('./routes/mark_Info.js');

app.use('/',router);
app.get("/",function(request,response){
    response.send("hello world")
})
mongoose.connect('mongodb://localhost:27017/studentsDB',()=> {console.log("successfully connected to database");});
app.listen(2000,function(){
    console.log("started application on port %d", 2000)
});
app.use('/',deptApi);
app.use('/',stdApi);
app.use('/',courseApi);
app.use('/',markApi);

