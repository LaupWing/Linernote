const express   = require('express')
const router    = express.Router()
const {getData} = require('./helper')

router.get('/', (req,res)=>{
    res.render('login')
})

router.get('/home', (req,res)=>{
    const io = req.app.get('socketio')
    const acces_token = req.session.acces_token

    async function artistQuery(val, id){
        const config = {
            url: `https://api.spotify.com/v1/search?q=${val}&type=artist&limit=5&offset=0`,
            acces_token
        }
        const unfiltered_data = await getData(config)
        const data = unfiltered_data.artists.items
            .filter(item=>item.images.length!==0)
        io.to(id).emit('queryresult', data)
    }

    io.on('connection', (socket)=>{
        socket.join(socket.id)
        socket.on('artist query',(val)=>artistQuery(val, socket.id))
    })
    res.render('index')
})

module.exports = router