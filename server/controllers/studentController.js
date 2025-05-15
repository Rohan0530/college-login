let Student = require('../models/student')
let bcrypt = require('bcrypt')

let signupStudent = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        console.log(req.body);

        let existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.json({ error: true, message: "Email already registered" });
        }

        let hashPwd = await bcrypt.hash(password, 10);
        let student = await Student.create({ email, password: hashPwd });

        res.json({ error: false, message: "Student has signed up", studentId: student._id });
    } catch (error) {
        next(error);
    }
};


let addstudent = async (req, res, next) => {
    try {
        let { studentId, name, contact } = req.body;
        let resume = req.file?.filename;

        console.log(req.body);

        let updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            { name, contact, resume },
            { new: true }
        );

        if (!updatedStudent) {
            return res.json({ error: true, message: "Student not found" });
        }

        res.json({ error: false, message: "Student details updated successfully", student: updatedStudent });
    } catch (error) {
        next(error);
    }
};

let studentLogin = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        let student = await Student.findOne({ email });

        if (student) {
            let correctPwd = await bcrypt.compare(password, student.password);
            if (correctPwd) {
                res.json({
                    error: false,
                    message: "Login successful",
                    studentId: student._id                              // return _id to frontend
                });
            } else {
                res.json({ error: true, message: "Invalid password" });
            }
        } else {
            res.json({ error: true, message: "Invalid credentials" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { signupStudent, addstudent, studentLogin }
