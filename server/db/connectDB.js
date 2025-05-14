let mongoose = require('mongoose')

let connectDatabase = ()=>{
    return mongoose.connect(process.env.MONGO_URL)
}

module.exports = connectDatabase