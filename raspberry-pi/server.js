var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

server.listen(3000);

io.on('connection', function (socket) {
  socket.on('setup', function (data) {
    socket.broadcast.emit('setup', data);
  });
});
