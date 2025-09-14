const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('Connected db')
        }).catch(err => {
            console.log('error: ', err)
        })
}

module.exports = connectDB