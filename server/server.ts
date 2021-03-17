import express from 'express';
import { Server, Socket } from 'socket.io';

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('Express started on PORT: ', PORT);
});

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true
  }
});

io.on('connection', (socket: Socket) => {
  console.log(socket.handshake.headers.type);
  switch (socket.handshake.headers.type) {
    case 'python':
      socket.join('python');
      socket.on('message', (message) => {
        socket.to('web').emit('message', message);
      });
      break;
    case 'web':
      socket.join('web');
      break;
    default:
      break;
  }
});
