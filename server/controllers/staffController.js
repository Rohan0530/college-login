let Student = require('../models/student')
let bcrypt = require('bcrypt')

let signupStaff = async (req, res, next) => {
  try {
    const { name, email, password, subject } = req.body;

    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: true, message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStaff = new Student({
      name,
      email,
      password: hashedPassword,
      role: 'staff',
      subject
    });

    await newStaff.save();

    res.status(201).json({ message: "Staff registered successfully" });
  } catch (error) {
    next(error);
  }
}

let staffLogin = async (req, res, next) => {
    try {
        let { email, password } = req.body
        let staff = await Student.findOne({ email,role: 'staff' })
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

module.exports = { signupStaff, staffLogin }