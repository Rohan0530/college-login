let express = require('express')
let { addStaff, staffLogin } = require('../controllers/staffController')
let path = require('path')
let fs = require('fs')

let router = express.Router()

// for registering admin 
router.post('/register', addStaff)

// for logging
router.post('/login', staffLogin)

// for downloading resume
router.get('/download/:filename', (req, res) => {
    const file = path.join(__dirname, '../uploads', req.params.filename);
    if (fs.existsSync(file)) {
        res.download(file);
    } else {
        res.status(404).send('File not found');
    }
});

module.exports = router