const mongoose = require('mongoose')
function dbConnection(){
    mongoose.connect('mongodb://0.0.0.0/instafeatureagain').then(() => console.log('MongoDB connected')).catch((err) => console.log(err))
}
module.exports = dbConnection