const captiongenrator = require('../service/ai.service')

const Postcontroller = async (req, res) => {
    const file = req.file


    const base64ImageFile = new Buffer.from(file.buffer).toString('base64')
    const caption = await captiongenrator(base64ImageFile)

    res.json({
        caption
    })

}

module.exports = Postcontroller 
