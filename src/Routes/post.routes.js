const express = require("express");
const authMiddleware = require('../Middleware/auth.middleware')
const Postcontroller = require('../controller/post.controller')
const router = express.Router();
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() })

router.post("/",
    authMiddleware,
    upload.single('image'),
    Postcontroller
)

module.exports = router;
