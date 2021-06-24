import { useEffect } from 'react';
import { init } from './script';
import styled from 'styled-components';

const Canvas = styled.canvas`
  border: 10px solid #000;
`;

export const HoleInTheWall = () => {
  useEffect(() => {
    init();
  });

  return <Canvas className='webgl'></Canvas>;
};
