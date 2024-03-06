const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { isEmail } = require('validator')


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
        unique: [true, "Already Registered"],
        lowercase: true,
        validate: [isEmail, "Enter a valid Email-id"],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password should be atleast 8 characters long"]
    },
    fullname: {
        type: String,
        required: [true, "Name is Required"],
    },
    isPremium:{
        type: Boolean,
        default: false,
    },
    imgurl:{
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AWindows_10_Default_Profile_Picture.svg&psig=AOvVaw3oR1UrugU4vFGUVq_NtyDE&ust=1709265160464000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNjmm4jTz4QDFQAAAAAdAAAAABAF'
    }

})

// fire the function before saving in the db
UserSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = new mongoose.model('User', UserSchema)
module.exports = {User}