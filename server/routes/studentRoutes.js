let { signupStudent, getAllStudents, studentLogin,getSingleData } = require('../controllers/studentController')
let upload = require('../multer/uploads')

let express = require('express')
let router = express.Router()

// route to register student 

// router.post('/register',upload.none(), signupStudent)

router.post('/register', upload.single('resume'), signupStudent);


// route to login student 

router.post('/login', studentLogin)


router.get('/all',getAllStudents)

router.get('/single/:id',getSingleData)

// router.post('/add', upload.single('resume'), addstudent)

module.exports = router