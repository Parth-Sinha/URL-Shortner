const json = require('jsonwebtoken')
const {User} = require('../models/userModel')

const userValidation = (req, res)=>{
    const token = req.headers.authorization
    if(!token){
        res.status(400).json({status: false, pid: null})
    }
    json.verify(token, 'privateAuth', async (err, data) =>{
        console.log("data is " , data)
        if(!data){
            res.status(400).json({status: false, pid: null})
        }
        if(err){
            res.status(400).json({status: false, pid: null})
        }
        const user = await User.findById(data.id)
        if(!user){
            res.status(400).json({status: false, pid: null})
        }
        else res.status(201).json({status: true, email: user.email, fullname: user.fullname, pid: data.id})
    })
}

module.exports = {userValidation}