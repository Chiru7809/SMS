const mongoose = require('mongoose');
const CourseSchema = mongoose.Schema({
    COURSEID: {type:String},
    COURSENAME: {type:String},
    DEPTID: {type:String},
})
module.exports=mongoose.model('COURSE_INFO',CourseSchema);