const express = require('express')
const app = express()
const uploadImage = require('../src/services/storage.service')
app.use(express.json())
const multer = require ('multer')
const upload = multer({storage:multer.memoryStorage()})
app.post('/posts',upload.single('image'),(req,res) => {
    const {caption} = req.body
    const file = req.file
    console.log(caption,file)
    uploadImage(file).then((data) => console.log(data)).catch((err) => console.log(err))
    res.send(file)
    console.log(file.buffer)
})
module.exports = app