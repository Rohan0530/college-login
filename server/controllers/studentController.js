let Student = require('../models/student')
let bcrypt = require('bcrypt')

let signupStudent = async (req, res, next) => {
    try {
        let { name, email, password, role, subject, contactNumber, course,  } = req.body;
        let resume = req.file?.filename;

        let existingUser = await Student.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: true, message: "Email already registered" });
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        let newUser = {
            name,
            email,
            password: hashedPassword,
            role
        };

        if (role === 'student') {
            newUser.contactNumber = contactNumber;
            newUser.course = course;
            newUser.resume = resume;
        } else if (role === 'staff') {
            newUser.subject = subject;
        } else {
            return res.status(400).json({ error: true, message: "Invalid role" });
        }

        let createdUser = await Student.create(newUser);

        res.status(201).json({
            error: false,
            message: `${role} registered successfully`,
            userId: createdUser._id
        });
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
}

let studentLogin = async (req, res, next) => {
    try {
        let { email, password, role } = req.body

        if (!email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let userExists = await Student.findOne({ email, role })

        if (!userExists) {
            return res.json({ error: true, message: "Invalid email or role" })
        }

        let comparedPwd = await bcrypt.compare(password, userExists.password)

        if (!comparedPwd) {
            return res.json({ error: true, message: "Invalid password" })
        }
        res.status(200).json({
            message: `${role} login successful`,
            user: {
                name: userExists.name,
                email: userExists.email,
                role: userExists.role,
                subject: userExists.role === 'staff' ? userExists.subject : undefined,
                resume: userExists.role === 'student' ? userExists.resume : undefined
            },
        })

    } catch (error) {
        res.status(500).json({ message: "Server error", error })
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({ role: 'student' })
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: true, message: 'Error fetching students' });
    }
}

const getSingleData = async(req,res,next)=>{
    try {
        const {id} = req.params
        let students = await Student.findById(id)
        if(!students){
            res.json({error:true,message:"student not feached based on id"})
        }else{
            res.json({error:false,message:"Student data featched successfullt",data:students})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { signupStudent, getAllStudents, studentLogin,getSingleData }
