const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String
    }
})

const Model = mongoose.model('users', userSchema)

module.exports = Model