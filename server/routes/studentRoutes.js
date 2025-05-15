let { signupStudent, addstudent, studentLogin } = require('../controllers/studentController')
let upload = require('../multer/uploads')

let express = require('express')
let router = express.Router()

// route to register student 

router.post('/register', signupStudent)

// route to login student 

router.post('/login', studentLogin)


router.post('/signup', upload.none(), signupStudent); // use this for FormData without files


//this will allow to upload resume along with other details

router.post('/add', upload.single('resume'), addstudent)

module.exports = router