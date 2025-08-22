const mongoose = require('mongoose')
const postSchema = mongoose.Schema({

    url:String,
    caption:String

})

module.exports = mongoose.model('post',postSchema)