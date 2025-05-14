let Student = require('../models/student')
let bcrypt = require('bcrypt')

let addstudent = async (req, res, next) => {
    try {
        let { name, email, password, contact, resume } = req.body
        console.log(req.body)
        let hashPwd = await bcrypt.hash(password, 10)
        let student = await Student.create({ name, email, password: hashPwd, contact, resume })
        res.json({ error: false, message: "student added successfully" })
    } catch (error) {
        next(error)
    }
}

let studentLogin = async (req, res, next) => {
    try {
        let { email, password } = req.body
        let student = await Student.findOne({ email })
        if (student) {
            let correctPwd = await bcrypt.compare(password, student.password)
            if (correctPwd) {
                res.json({ error: false, message: "Login successful" })
            } else {
                res.json({ error: true, message: "Invalid password" })
            }
        } else {
            res.json({ error: true, message: "Invalid credentials" })
        }
    } catch (error) {
        next(error)
    }

}

module.exports = { addstudent, studentLogin }