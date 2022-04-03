//const db = require('./server/db/db')
const express = require('express')
const path = require('path')

//const routes = require('./server/routes/routes')

const server = express()

server.use(express.json())
//server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(__dirname))

//server.use('/api/v1/user', routes)

// server.get('*', (req, res) => {
//   res.sendFile(path.resolve('index.html'))
// })

module.exports = server

// initialize http server, socket.io and port number
const http = require('http').createServer(server)
const io = require('socket.io')(http)

const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
  console.log('connected')
    socket.on('message', (evt) => {
      console.log(evt)
        socket.broadcast.emit('message', evt)
       // require("fs").writeFile("demo.txt", "Foo bar!")
    })
})
http.listen(PORT, () => console.log(`server listening on port: ${PORT}`))

io.on('disconnect', (evt) => {
  console.log('some people left')
})
