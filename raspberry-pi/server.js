var express = require('express')
  , app = express()
  , server = require('http').Server(app)
  , io = require('socket.io')(server)
  , chokidar = require('chokidar')
  , currentPin;

app.use(express.static('public'));
server.listen(3000);

io.on('connection', function (socket) {
  socket.on('setupEnter', function () {
    currentPin = makePin();
    socket.broadcast.emit('setupEnter', currentPin);
  });
  socket.on('setupSave', function (data) {
    if (!data) return;

    var match = data.pin === currentPin;

    if (match) {
      socket.broadcast.emit('setupSave', data);
    }
    
    socket.emit('setupStatus', match);
  });
  socket.on('disconnect', function () {
    io.emit('setupExit');
  });
});

chokidar.watch('/Volumes', {
  depth: 1,
  ignoreInitial: true
}).on('addDir', function (event, path) {
  console.log('usb inserted!');
  io.emit('usbEnter');
}).on('unlinkDir', function (event, path) {
  console.log('usb removed!');
  io.emit('usbExit');
});

function makePin() {
  function randInt() {
    var min = 0
      , max = 9;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return [randInt(), randInt(), randInt(), randInt()].join('');
}
