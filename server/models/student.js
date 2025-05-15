let mongoose = require('mongoose')

let studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : false
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
        required : false
    },
    resume : {
        type : String,
        required : false
    },
    uploadDate : {
        type : Date,
        default : Date.now
    }
})

let student = mongoose.model('student' , studentsSchema)

module.exports = student