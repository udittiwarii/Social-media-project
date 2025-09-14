const userModel = require('../Model/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registercontroller(req, res) {
    const { username, password } = req.body

    const isUserexist = await userModel.findOne({
        username
    })

    if (isUserexist) {
        return res.status(400).json({
            message: "User exist already"
        })
    }

    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRITE)
    res.cookie('token', token)

    return res.status(200).json({
        message: "User register successfully"
    })
}

async function logincontroller(req, res) {
    const { username, password } = req.body

    const user = await userModel.findOne({
        username
    })

    if (!user) {
        return res.status(400).json({
            message: "Unauthorised , user not found"
        })
    }

    const ispassword = await bcrypt.compare(password, user.password)
    if (!ispassword) {
        return res.status(400).json({
            message: 'Invalid Password!!'
        })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRITE)
    res.cookie('token', token)

    return res.status(200).json({
        message: 'login successfully!'
    })
}

async function usercontroller(req, res) {


}

module.exports = {
    registercontroller,
    logincontroller
}