import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Sketch from 'react-p5';
import styled from 'styled-components';

import {
  preload,
  setup,
  draw,
  keyPressed,
  mousePressed,
  mouseDragged
} from './sketch';

const Container = styled.div`
  canvas {
    border: 10px solid #000;
  }
`;

export const SpaceInvaders = () => {
  const [pos, setPos] = useState<number>(0.5);

  useEffect(() => {
    const socket = io('http://localhost:5000', {
      extraHeaders: {
        type: 'web'
      }
    });

    socket.on('data', (data) => {
      const { NOSE } = data;
      if (parseFloat(NOSE.score) > 0.4) {
        setPos(parseFloat(NOSE.x));
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container>
      <Sketch
        preload={preload}
        setup={setup}
        draw={(p5) => {
          draw(p5, pos);
        }}
        keyPressed={keyPressed}
        mousePressed={mousePressed}
        mouseDragged={mouseDragged}
      />
    </Container>
  );
};
