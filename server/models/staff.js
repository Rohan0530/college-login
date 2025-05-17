 let {Schema, model} = require('mongoose')

 let staffSchema = new Schema({
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
 })

 let staff = model('staff' , staffSchema)

 module.exports = staff