const path= require('path')
const http= require('http')
const express= require('express')
const socketio= require('socket.io')

const app= express()
const server= http.createServer(app)
const io= socketio(server)

const port= process.env.PORT
const publicDir= path.join(__dirname, '../public')

app.use(express.static(publicDir))

io.on('connection',(socket)=> {

    socket.on('sendMessage', (msg)=>{
        socket.broadcast.emit('messageRecived', msg)
    })
})

server.listen(port,()=>{
    console.log('server is online at port ',port)
})