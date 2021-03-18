import React, { useState, useEffect, useReducer, useRef } from 'react';
import { io } from 'socket.io-client';
import { Stage, Sprite, useTick, Container } from '@inlet/react-pixi';

type Point = {
  x: number;
  y: number;
};

type Action = {
  type: string;
  data: Point;
};

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

  const reducer = (prevPoint: Point, { data }: Action) => {
    return {
      x: prevPoint.x + data.x,
      y: prevPoint.y + data.y
    };
  };
  const Bunny = () => {
    const [motion, update] = useReducer(reducer, {
      x: 0,
      y: 0
    });

    useEffect(() => {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        let data = { x: 0, y: 0 };
        switch (e.keyCode) {
          case 87:
            data.y = -1;
            break;
          case 83:
            data.y = 1;
            break;
          case 68:
            data.x = 1;
            break;
          case 65:
            data.x = -1;
            break;
          default:
            break;
        }
        update({
          type: 'update',
          data
        });
      });
    }, []);

    return (
      <Sprite
        image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png'
        {...motion}
      />
    );
  };

  return (
    <Stage width={300} height={300} options={{ transparent: true }}>
      <Container x={150} y={150}>
        <Bunny />
      </Container>
    </Stage>
  );
};

export default App;
