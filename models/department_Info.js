const mongoose = require('mongoose');
const departmentSchema = mongoose.Schema({
    DEPTID: {type:String},
    DEPTNAME: {type:String},
    DEPTINTAKE: {type:String},
})
module.exports=mongoose.model('department_Info',departmentSchema);