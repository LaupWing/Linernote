const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const session    = require('express-session')
const routes     = require('./routes')
const port       = process.env.PORT || 1000
const http       = require('http').Server(app)
const oauth      = require('./oauth')
const io         = require('socket.io')(http)

app
    .set('view engine', 'ejs')
    .set('views', 'view')
    .set('socketio', io)
    .use(session({
        secret: 'Linernote',
        cookie: {secure:false},
        resave: false,
        saveUninitialized: true
    }))
    .use(oauth)
    .use('/', routes)
    .use(express.static('static'))


http.listen(port, ()=>console.log(`Server is listening to port ${port}`))