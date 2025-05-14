let Staff = require('../models/staff')
let bcrypt = require('bcrypt')

let addStaff = async (req, res, next) => {
    try {
        let { email, password } = req.body
        console.log(req.body)
        let hashPwd = await bcrypt.hash(password, 10)
        let staff = await Staff.create({ email, password: hashPwd })
        res.json({ error: false, message: "staff added successfully" })
    } catch (error) {
        next(error)
    }
}

let staffLogin = async (req, res, next) => {
    try {
        let { email, password } = req.body
        let staff = await Staff.findOne({ email })
        if (staff) {
            let comparePwd = await bcrypt.compare(password, staff.password)
            if (comparePwd) {
                res.json({ error: false, message: "login successful" })
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

module.exports = { addStaff, staffLogin }