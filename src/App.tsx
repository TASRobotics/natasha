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
  const reducer = (_: Point, { data }: Action) => {
    return data;
  };

  const Bunny = () => {
    const [motion, update] = useReducer(reducer, {
      x: 0,
      y: 0
    });

    useEffect(() => {
      const socket = io('http://localhost:5000', {
        extraHeaders: {
          type: 'web'
        }
      });

      socket.on('data', (data) => {
        const { NOSE } = data;
        if (parseFloat(NOSE.score) > 0.4) {
          update({
            type: 'update',
            data: {
              x: (parseFloat(NOSE.x) - 1) * 150,
              y: (parseFloat(NOSE.y) - 1) * 150
            }
          });
        }
      });

      return () => {
        socket.disconnect();
      };
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
