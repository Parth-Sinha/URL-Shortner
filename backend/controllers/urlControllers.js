const {User} = require('../models/userModel')
const json = require('jsonwebtoken')
const { url } = require('../models/urlModel.js')
const {nanoid} = require('nanoid')


const get_url = async(req, res)=>{
    const token = req.cookies.jwt
    let pid = null
    if(token){
        json.verify(token, 'privateAuth', async(err, data) =>{
            if(err){
                res.status(401).json({status: false})
            }
            pid = data.id
            const user = await User.findById(data.id)
            console.log(user)
            if(!user){
                res.status(401).json({status: false})
            }
        })
    }
    const dataAvailablity = await url.find({personId: pid});
    return res.json(dataAvailablity)
}

const post_url = async(req, res)=>{
    const redirectedToUrl = req.body.redirectedUrl
    if(!redirectedToUrl){
        return res.status(400).send({})
    }

    const shortenedId = nanoid(8)
    const serverUrl = `http://localhost:${process.env.PORT}/`
    const token = req.cookies.jwt
    let pid = null
    if(token){
        json.verify(token, 'privateAuth', async (err, data) =>{
            if(err){
                res.status(401).json({status: false})
            }
            pid = data.id
            const user = await User.findById(data.id)
            console.log(user)
            if(!user){
                res.status(401).json({status: false})
            }
        })
    }
    const urlObject = await url.create({
        shortUrl: serverUrl+shortenedId,
        redirectedUrl: redirectedToUrl,
        personId: pid
    })
    return res.send(urlObject)
}

const delete_url = async(req, res)=>{
    const shortId = req.params.shortid
    const serverUrl = `http://localhost:${process.env.PORT}/`
    // We need to verify if the user is logged in or not
    const token = req.cookies.jwt
    let pid = null
    if(token){
        json.verify(token, 'privateAuth', async (err, data) =>{
            if(err){
                res.status(401).json({status: false})
            }
            pid = data.id
            const user = await User.findById(data.id)
            console.log(user)
            if(!user){
                res.status(401).json({status: false})
            }
        })
    }
    if(pid){
        const deletedUrl=  await url.findOneAndDelete({shortUrl: serverUrl + shortId, personId: pid})
        return res.send(deletedUrl)
    }
    return res.status(401).send('cannot delete')
}

const get_click_short_url =  async(req, res)=>{
    const shortId = req.params.shortid
    const serverUrl = `http://localhost:${process.env.PORT}/`
    const foundUrl = await url.findOneAndUpdate({shortUrl: serverUrl+shortId}, {$push:{
        visitedHistory:{timestamps: Date.now()}
    }})
    console.log(foundUrl)
    if(foundUrl){

        const redirectTo = "https://" + foundUrl.redirectedUrl
        return res.redirect(302, redirectTo)
    }
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // For errors of this type, ensure that code is trying to send response after it is sent. Check for following lines, in if and else,, you are already sending response to server and after this is processed, on last line, you are sending some text.
}

const post_premium_url = async(req, res) =>{
    const requestedShortUrl = req.body.shortUrl
    const redirectedToUrl = req.body.redirectedUrl
    if(!redirectedToUrl){
        return res.status(400).send("Please provide the required url")
    }
    const serverUrl = `http://localhost:${process.env.PORT}/`
    try {
        const urlObject = await url.create({
            shortUrl: serverUrl + requestedShortUrl,
            redirectedUrl: redirectedToUrl
        })
    } catch (error) {
        res.status(400).send('Send another shorturl')
    }
    return res.send('successfull')

}

module.exports = {get_url, post_url, delete_url, get_click_short_url, post_premium_url}