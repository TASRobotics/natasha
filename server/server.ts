import express from 'express';
import { Server, Socket } from 'socket.io';

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('Express started on PORT: ', PORT);
});

const io = new Server(server, {
  // ...
});

io.on('connection', (socket: Socket) => {
  console.log(socket);
});
