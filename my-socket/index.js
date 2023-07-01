const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3002;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  // Mengirimkan data user account saat koneksi dibuat
  socket.on('user account', (account) => {
    console.log('User account: ' + account);
    io.emit('user account', account);
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3002, () => {
  console.log('listening on *:3002');
});
