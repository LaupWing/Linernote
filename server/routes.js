const express = require('express')
const router = express.Router()
const {getData} = require('./helper')

router.get('/', (req,res)=>{
    res.render('login')
})

router.get('/home', (req,res)=>{
    const io = req.app.get('socketio')
    const acces_token = req.session.acces_token
    
    function artistQuery(val){
        const config = {
            endpoint: 'playlists/2f6tXtN0XesjONxicAzMIw/tracks',
            acces_token
        }
        
    }
    io.on('connection', (socket)=>{
        console.log(socket.id)
        socket.on('artist query',(val)=>artistQuery(val))
    })
    res.render('index')
})

module.exports = router