import React, { useState, useEffect } from 'react';
import './App.css';
import { io } from 'socket.io-client';

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:5000', {
      extraHeaders: {
        type: 'web'
      }
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
