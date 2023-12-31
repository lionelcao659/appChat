const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

const io = new Server(server);

io.on('connection', (socket) =>{
    console.log('user connected');
    socket.on('on-chat', data =>{
        io.emit('user-chat', data)
    });
});

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

server.listen(3000, () => {
    console.log('listening on port 3000');
})