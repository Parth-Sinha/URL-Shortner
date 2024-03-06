const { User } = require("../models/userModel");
const json = require('jsonwebtoken')
const bcrypt = require('bcrypt');



const handleErrors = (error)=>{
    let err = {email: '', password: '', fullname: ''}
    if(error.code == '11000'){
        // Duplicacy involved
        err['email'] = "User Already Registered"
        return err;
    }

    if (error.message.includes('User validation failed')){
        Object.values(error.errors).forEach((error)=>{
            err[error.properties.path] = error.properties.message
        })
    }
    return err;
}

const maxAge = 12*60*60;

const createJsontokens = (id)=>{
    return json.sign({id}, 'privateAuth', {
        expiresIn: maxAge
    })
}

const signup_post = async (req, res)=>{
    const {fullname, email, password} = req.body;
    console.log(fullname, email, password)
    try {
        const user = await User.create({
            fullname: fullname,
            email: email,
            password: password
        })    
        res.status(201).send('Sucessfully Signed Up')
    } catch (error) {
        errors = handleErrors(error)
        console.log(errors)
        res.status(400).json({error: errors}) 
    }
}

const login_post = async(req, res)=>{
    console.log('function invoked')
    const {email, password} = req.body;
    console.log(email, password)
    if(!email || !password){
        res.status(400).json({error: 'Enter a valid email and password', status: false})
    }
    const user = await User.findOne({ email})
    if(!user){
        res.status(400).json({error: 'Not a valid user', status: false})
    }
    const authenticate = await bcrypt.compare(password, user.password)
    if(!authenticate){
        res.status(400).json({error: 'Enter a valid email and password', status: false})
    }
    const token = createJsontokens(user._id)
    res.cookie('jwt', token, {httponly: false, maxAge: maxAge*1000})
    console.log(token)
    return res.status(201).json({accessToken: token, user: user, status: true})
}

module.exports = {signup_post, login_post}