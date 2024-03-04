const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    shortUrl:{
        type: String,
        required: true,
        unique: true
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    personId: {
        type: String,
    },
    visitedHistory: [{timestamps: {type: Number}}],

}, 
{timestamps: true}
)

const url = new mongoose.model('url', UrlSchema)
module.exports = {url}