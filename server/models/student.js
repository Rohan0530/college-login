// let mongoose = require('mongoose')

// let studentsSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     contact: {
//         type: String,
//         required: true
//     },
//     resume: {
//         type: String,
//         required: true
//     },
//     uploadDate: {
//         type: Date,
//         default: Date.now
//     },

//     grade: {
//         type: String,
//         required: true
//     }
// })

// let student = mongoose.model('student', studentsSchema)

// module.exports = student




let mongoose = require('mongoose');

let studentsSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['student', 'staff'],
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    contactNumber: {
        type: String,
        // required: true

    },
    resume: {
        type: String
    },

    subject: {
        type: String,
        // required: true
    },
    course:{
        type: String,
        // required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('student', studentsSchema);
