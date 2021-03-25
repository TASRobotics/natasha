import Sketch from 'react-p5';

import {
  preload,
  setup,
  draw,
  keyPressed,
  mousePressed,
  mouseDragged
} from './sketch';

export const SpaceInvaders = () => {
  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      keyPressed={keyPressed}
      mousePressed={mousePressed}
      mouseDragged={mouseDragged}
    />
  );
};
