const { Server } = require("socket.io");

const io = new Server({
  cors: ['GET', "POST"]
});

let data = 0;

io.on("connection", (socket) => {
  console.log('connected');
  socket.emit("data", data);
  socket.on('data', (newData) => {
    console.log('NewData', newData);
    data = newData;
    io.emit('data', data);
  });
});

io.listen(3000);