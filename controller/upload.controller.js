
import User from "../model/User.js"

export const uploadAvatar = async (req, res) => {
    const url = `/uploads/avatars/${req.file.filename}`
    await User.updateOne({
        _id: req.userId
    }, {
        avatar: url
    })
    res.json({
        url: url
    })
}

export const uploadFile = async (req, res) => {

    const url = `/uploads/files/${req.file.filename}`

    const user =  await User.findById(req.userId)

    user.files.push(url)

    await user.save()

    res.json({
        url: url
    })
    
}