let multer = require('multer')
let path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')                    // uploads folder 
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

let upload = multer({ storage: storage })

module.exports = upload
