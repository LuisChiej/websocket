const { Socket } = require('socket.io');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


io.on('connection', (socket)=>{
    console.log('User connected');




    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen('3000', ()=>{
    console.log('Listening on port 3000')
});
