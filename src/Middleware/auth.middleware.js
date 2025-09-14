const jwt = require("jsonwebtoken");
const userModel = require("../Model/user.model");

async function authMiddleware(req, res, next) {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "No token, Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRITE);
        const user = await userModel.findOne({ _id: decoded.id });

        req.user = user

        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized, Invalid token" });
    }
};

module.exports = authMiddleware