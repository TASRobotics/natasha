import { useContext, useState, ReactNode } from 'react';
import styled from 'styled-components';

import {
  Title as BaseTitle,
  SubTitle as BaseSubTitle,
  GameSelection,
  Button
} from '../../components';
import { UserContext } from '../../context';
import SpaceInvadersImg from '../../games/SpaceInvaders/img.jpg';
import HoleInTheWallImg from '../../games/HoleInTheWall/img.png';
import PacManImg from '../../assets/images/pacman.png';
import DonkeyKongImg from '../../assets/images/donkeykong.png';
import TetrisImg from '../../assets/images/tetris.png';
import MarioImg from '../../assets/images/mario.png';
import PongImg from '../../assets/images/pong.png';
import FroggerImg from '../../assets/images/frogger.png';
import GalagaImg from '../../assets/images/galaga.png';
import { SpaceInvaders } from '../../games';
import { HoleInTheWall } from '../../games';

const GameContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(BaseTitle)`
  color: #000;
`;

const SubTitle = styled(BaseSubTitle)`
  color: #000;
  margin-bottom: 93px;
`;

const GameSelectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ForYouContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin-top: -80px;
  margin-left: -40px;
  padding-top: 50px;
  padding-left: 40px;
  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #eae9ff;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Games = () => {
  const [game, setGame] = useState<string | undefined>(undefined);
  const { user } = useContext(UserContext);

  if (game) {
    let gameNode: ReactNode;
    switch (game) {
      case 'space-invaders':
        gameNode = <SpaceInvaders />;
        break;
      case 'hole-in-the-wall':
        gameNode = <HoleInTheWall />;
        break;
      default:
        gameNode = <></>;
        break;
    }
    return (
      <GameContainer>
        {gameNode}
        <Button
          onClick={() => {
            setGame(undefined);
          }}
          style={{ marginTop: 20 }}
        >
          END GAME
        </Button>
      </GameContainer>
    );
  }

  if (!user) return <></>;

  return (
    <div>
      <Title>Games</Title>
      <SubTitle>Continue Playing</SubTitle>
      <GameSelectionContainer>
        <GameSelection
          title='Space Invaders'
          description={`It's Space Invaders!`}
          img={SpaceInvadersImg}
          onStart={() => {
            setGame('space-invaders');
          }}
        />
        <GameSelection
          title='Hole in the Wall'
          description={`Hole in the Wall!`}
          img={HoleInTheWallImg}
          onStart={() => {
            setGame('hole-in-the-wall');
          }}
        />
        <GameSelection
          title='Pac-Man'
          description={`It's Pac-Man!`}
          img={PacManImg}
          onStart={() => {}}
        />
        <GameSelection
          title='Donkey Kong'
          description={`It's Donkey Kong!`}
          img={DonkeyKongImg}
          onStart={() => {}}
        />
      </GameSelectionContainer>
      <SubTitle style={{ marginTop: -20 }}>For You</SubTitle>
      <div>
        <ForYouContainer>
          <GameSelection
            title='Tetris'
            description={`Tetris!`}
            img={TetrisImg}
            onStart={() => {}}
            forYou
          />
          <GameSelection
            title='Super Mario'
            description={`Super Mario!`}
            img={MarioImg}
            onStart={() => {}}
            forYou
          />
          <GameSelection
            title='Pong'
            description={`Pong!`}
            img={PongImg}
            onStart={() => {}}
            forYou
          />
          <GameSelection
            title='Frogger'
            description={`Frogger!`}
            img={FroggerImg}
            onStart={() => {}}
            forYou
          />
          <GameSelection
            title='Galaga'
            description={`Galaga!`}
            img={GalagaImg}
            onStart={() => {}}
            forYou
          />
        </ForYouContainer>
      </div>
    </div>
  );
};
