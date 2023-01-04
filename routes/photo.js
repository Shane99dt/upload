const express = require('express')
const { upload, directory } = require('../config/multer')
const { Picture } = require('../models')
const app = express()

app.post('/:id', upload.single('picture'), async( req, res) => {
  try{
    const picture = await Picture.create({
      url: `http://localhost:5000/${directory}${req.file.filename}`,
      UserId: req.params.id
    })

    res.json(picture)
  }catch(e){
    res.json(e)
  }
})

app.get('/:id', async (req, res) => {
  try {
    const picture = await Picture.FindOne({
      where: {
        UserId: req.params.id
      }
    })

    res.json(picture)
  } catch (e) {
    res.json(e)
  }
})

module.exports = app