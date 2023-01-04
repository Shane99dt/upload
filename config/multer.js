const multer = require('multer')
const directory = 'images/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/${directory}`)
  },
  filename: (req, file, cb) => {
    const fileType = file.mimetype.split('/')[1]

    const originalName = file.originalname.split('.')[0]

    const filename = `${originalName}-${Date.now()}.${fileType}`

    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

module.exports = {
  storage,
  upload,
  directory
}