const express = require('express')
const app = express()
const cors = require('cors')
const uploadImage = require('../src/services/storage.service')
const postModel = require('./models/post.model')
app.use(express.json())
app.use(cors())
const multer = require ('multer')
const upload = multer({storage:multer.memoryStorage()})
app.post('/posts', upload.single('image'), async (req, res) => {
    try {
        const { caption } = req.body;
        const file = req.file;
        if (!file) return res.status(400).json({ error: "No file uploaded" });

        const uploadResult = await uploadImage(file);  
        const post = await postModel.create({
            url: uploadResult.url,
            caption
        });
        console.log('Post created:', post);
        res.json({ success: true, post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong", details: err.message });
    }
});
app.get('/posts', async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json({ success: true, posts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong", details: err.message });
    }
})
module.exports = app