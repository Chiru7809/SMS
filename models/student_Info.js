const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    SID: {type:String},
    FN: {type:String},
    LN: {type:String},
    DOB: {type:Date},
    YOJ:{type:Date},
    SEMESTER:{type:String},
    GENDER:{type:String},
    ADDRESS:{type:String},
    PHONNUMBER:{type:String},
    DEPTID:{type:String},
    STATUS:{type:String},

})
module.exports=mongoose.model('student_Info',studentSchema);