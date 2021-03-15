import http from 'http';
import sio from 'socket.io';

const httpServer = http.createServer();
const io = sio(httpServer);

io.on('connection');
