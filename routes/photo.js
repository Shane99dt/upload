const express = require('express')
const { upload, directory } = require('../config/multer')
const { Picture } = require('../models')
const app = express()

app.post('/', upload.single('picture'), async( req, res) => {
  try{
    const photo = await Picture.create({
      url: `http://localhost:5000/${directory}${req.file.picture}`,
      UserId: req.file.userId
    })

    res.json(photo).status(201)
  }catch(e){
    res.json(e)
  }
})

app.get('/:userId', async (req, res) => {
  try {
    const picture = await Picture.FindOne({
      where: {
        UserId: req.params.userId
      }
    })

    res.json(picture).status(201)
  } catch (e) {
    res.json(e)
  }
})

module.exports = app