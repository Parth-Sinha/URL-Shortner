const express = require('express')
const {connectDB} = require('./connectionDB/connection.js')
const { url } = require('./models/urlModel.js')
const {nanoid} = require('nanoid')
const cors = require('cors')
const authcontrollers = require('./controllers/authControllers.js')
const cookieParser = require('cookie-parser')
const {userValidation} = require('./middleware/authmiddleware.js')

const app = express()



require('dotenv').config()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Connect to MongoDB

connectDB(process.env.URI).then(()=>{
    console.log("connected to DB...")
    app.listen(process.env.PORT, ()=>console.log(`Server started on PORT: ${process.env.PORT}`))
})


app.get('/api/user', async(req, res)=>{
    const dataAvailablity = await url.find({});
    return res.json(dataAvailablity)
}).post('/api/user', async(req, res)=>{
    const redirectedToUrl = req.body.redirectedUrl
    if(!redirectedToUrl){
        return res.status(400).send({})
    }

    const shortenedId = nanoid(8)
    const serverUrl = `http://localhost:${process.env.PORT}/`
    const urlObject = await url.create({
        shortUrl: serverUrl+shortenedId,
        redirectedUrl: redirectedToUrl
    })
    return res.send(urlObject)
})
app.delete('/:shortid', async(req, res)=>{
    const shortId = req.params.shortid
    const serverUrl = `http://localhost:${process.env.PORT}/`
    const deletedUrl=  await url.findOneAndDelete({shortUrl: serverUrl + shortId})
    return res.send(deletedUrl)
})

app.get('/:shortid', async(req, res)=>{
    const shortId = req.params.shortid
    const serverUrl = `http://localhost:${process.env.PORT}/`
    const foundUrl = await url.findOneAndUpdate({shortUrl: serverUrl+shortId}, {$push:{
        visitedHistory:{timestamps: Date.now()}
    }})
    const redirectTo = "https://" + foundUrl.redirectedUrl
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // For errors of this type, ensure that code is trying to send response after it is sent. Check for following lines, in if and else,, you are already sending response to server and after this is processed, on last line, you are sending some text.
    return res.redirect(302, redirectTo)
})

app.post('/api/user/premium', async(req, res) =>{
    const requestedShortUrl = req.body.shortUrl
    const redirectedToUrl = req.body.redirectedUrl
    if(!redirectedToUrl){
        return res.status(400).send("Please provide the required url")
    }
    const serverUrl = `http://localhost:${process.env.PORT}/`
    try {
        const availablityShortUrl = await url.find({shortUrl: serverUrl + requestedShortUrl}) 
        const urlObject = await url.create({
            shortUrl: serverUrl + requestedShortUrl,
            redirectedUrl: redirectedToUrl
        })
    } catch (error) {
        res.status(400).send('Send another shorturl')
    }
    return res.send('successfull')

})

app.post('/signup', authcontrollers.signup_post)
app.post('/login', authcontrollers.login_post)
app.post('/workspace', userValidation)