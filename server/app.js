let express = require('express')
let app = express()
let cors = require('cors')
let connectDB = require('./db/connectDB')
require('dotenv').config()
let studentroutes = require('./routes/studentRoutes')
let staffroutes = require('./routes/staffRoutes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/uploads', express.static('uploads'))

app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}))

app.use('/api/students', studentroutes)
app.use('/api/staff', staffroutes)

app.use((req, res) => {
    res.status(404).json({ error: true, message: "Page not found" })
})

app.use((err, req, res, next) => {
    res.json({ error: true, message: err.message })
})


let startServer = async () => {
    try {
        await connectDB()
        console.log('Mongo connected successfully')
        app.listen(4500 , err =>{
            if(err) throw err
            console.log('server is running at port http://localhost:4500')
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()