const {User} = require('../models/userModel')
const json = require('jsonwebtoken')
const { url } = require('../models/urlModel.js')
const {nanoid} = require('nanoid')


const get_url = async(req, res)=>{
    const token = req.headers.authorization
    console.log(req.headers)
    let pid = null
    if(token){
        json.verify(token, 'privateAuth', async(err, data) =>{
            if(data){
                pid = data.id
            }
            if(pid){

                const user = await User.findById(data.id)
                console.log(user)
                if(!user){
                    pid = null
                }
            }
        })
    }
    console.log(pid)
    const dataAvailablity = await url.find({personId: pid});
    console.log(dataAvailablity)
    return res.json(dataAvailablity)
}

const post_url = async(req, res)=>{
    const redirectedToUrl = req.body.redirectedUrl
    let pid = req.body.personId || null
    if(!redirectedToUrl){
        return res.status(400).send({})
    }

    const shortenedId = nanoid(8)
    const serverUrl = `https://url-shortner-backend-teal.vercel.app/`
    const urlObject = await url.create({
        shortUrl: serverUrl+shortenedId,
        redirectedUrl: redirectedToUrl,
        personId: pid
    })
    return res.send(urlObject)
}

const delete_url = async(req, res)=>{
    const shortId = req.params.shortid
    const serverUrl = `https://url-shortner-backend-teal.vercel.app/`
    console.log(shortId)
    const deletedUrl=  await url.findOneAndDelete({shortUrl: serverUrl + shortId})
    return res.send(deletedUrl)
}

const get_click_short_url =  async(req, res)=>{
    const shortId = req.params.shortid
    const serverUrl = `https://url-shortner-backend-teal.vercel.app/`
    const foundUrl = await url.findOneAndUpdate({shortUrl: serverUrl+shortId}, {$push:{
        visitedHistory:{timestamps: Date.now()}
    }})
    console.log(foundUrl)
    if(foundUrl){
        let redirectTo = "https://" + foundUrl.redirectedUrl;
        if(foundUrl.redirectedUrl.slice(0, 5)=="https"){
            redirectTo = foundUrl.redirectedUrl
        }
        
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
    const serverUrl = `https://url-shortner-backend-teal.vercel.app/`
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

const get_clicks_data = async(req, res) =>{
    console.log("inside here")
    const shortId = req.params.shortid
    const serverUrl = `https://url-shortner-backend-teal.vercel.app/`
    console.log(shortId)
    if(!shortId){
        return res.status(400).json([])
    }
    const urlObj = await url.findOne({shortUrl: serverUrl + shortId })
    if(!urlObj){
        return res.status(400).json([])
    }
    const visitedHistory = urlObj.visitedHistory
    return res.status(201).json(visitedHistory)
}

module.exports = {get_url, post_url, delete_url, get_click_short_url, post_premium_url, get_clicks_data}