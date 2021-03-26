import express from 'express';
import cors from 'cors';
import connectDB from '../config/db';
import path from 'path';
import { Server, Socket } from 'socket.io';

import usersRoute from './routes/users';
import authRoute from './routes/auth';
import messageRoute from './routes/message';
import adminRoute from './routes/admin';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect('https://' + req.headers.host + req.url);
    else return next();
  } else return next();
});

// Define Routes
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/message', messageRoute);
app.use('/api/admin', adminRoute);

const port = process.env.PORT || 5000;

app.get('/cosmicalienfont.ttf', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', 'src', 'games', 'SpaceInvaders', 'ca.ttf')
  );
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const publicPath = path.join(__dirname, '..', 'build');

  app.use(express.static(publicPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true
  }
});

io.on('connection', (socket: Socket) => {
  console.log(socket.handshake.headers.type);
  socket.on('disconnect', () => {
    console.log(`${socket.handshake.headers.type} disconnect`);
  });
  switch (socket.handshake.headers.type) {
    case 'python':
      socket.join('python');
      socket.on('message', (message) => {
        socket.to('web').emit('message', message);
      });
      socket.on('data', (data) => {
        socket.to('web').emit('data', data);
      });
      break;
    case 'web':
      socket.join('web');
      break;
    default:
      break;
  }
});
