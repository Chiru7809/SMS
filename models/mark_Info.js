const mongoose = require('mongoose');
const MarkSchema = mongoose.Schema({
    SID: {type:String},
    SEMESTER: {type:String},
    COURSEID: {type:String} ,
    MARK:{type:String},
})
module.exports=mongoose.model('MARK_INFO',MarkSchema);