let mongoose = require('mongoose')

let studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    resume : {
        type : String,
        required : true
    },
    uploadDate : {
        type : Date,
        default : Date.now
    }
})

let student = mongoose.model('student' , studentsSchema)

module.exports = student