import { useContext, useState, ReactNode } from 'react';
import styled from 'styled-components';

import { Title as BaseTitle, GameSelection, Button } from '../../components';
import { UserContext } from '../../context';
import SpaceInvadersImg from '../../games/SpaceInvaders/img.jpg';
import PacManImg from '../../games/PacMan/img.png';
import { SpaceInvaders } from '../../games';

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
  margin-bottom: 93px;
`;

const GameSelectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
          title='Pac-Man'
          description={`It's Pac-Man!`}
          img={PacManImg}
          onStart={() => {}}
        />
      </GameSelectionContainer>
    </div>
  );
};
