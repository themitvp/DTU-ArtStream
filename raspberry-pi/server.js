var express = require('express')
  , app = express()
  , server = require('http').Server(app)
  , io = require('socket.io')(server)
  , chokidar = require('chokidar')
  , ip = require('ip')
  , currentPin;

app.use(express.static('public'));
app.all('/setup', function (req, res) {
  res.redirect('/setup.html');
});
server.listen(80);

io.on('connection', function (socket) {
  socket.on('setupEnter', function () {
    currentPin = makePin();
    socket.broadcast.emit('setupEnter', currentPin);
    console.log('setupEnter', currentPin);
  });
  socket.on('setupSave', function (data) {
    console.log('setupSave', data);

    if (!data) return;

    var match = data.pin === currentPin;

    if (match) {
      socket.broadcast.emit('setupSave', data);
    }
    
    socket.emit('setupStatus', match);
  });
  socket.on('setupUrl', function () {
    socket.emit('setupUrl', 'http://'+ip.address()+'/setup');
    console.log('setupUrl');
  });
  socket.on('disconnect', function () {
    io.emit('setupExit');
    console.log('setupExit')
  });
});

chokidar.watch('/media/pi', {
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
