const json = require('jsonwebtoken')
const {User} = require('../models/userModel')

const userValidation = (req, res)=>{
    console.log("We are in userValidatioin")
    console.log(req.headers)
    console.log(req.cookies)
    const token = req.cookies.jwt
    if(!token){
        res.status(401).json({status: false})
    }
    json.verify(token, 'privateAuth', async (err, data) =>{
        console.log(data)
        if(err){
            res.status(401).json({status: false})
        }
        const user = await User.findById(data.id)
        console.log(user)
        if(!user){
            res.status(401).json({status: false})
        }
        else res.status(201).json({status: true, email: user.email})
    })
}

module.exports = {userValidation}