import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { useAuth } from '../hooks';
import { notification } from 'antd';
import { FirstStep, SecondStep, ThirdStep, FourthStep } from '../components';

export const registerDict = {
  bedwars: {
    label: 'Minecraft Bedwars',
    usernameLabel: 'Minecraft Username',
    teammates: 1
  },
  valorant: {
    label: 'Valorant',
    usernameLabel: 'Valorant Username',
    teammates: 4
  },
  league: {
    label: 'League of Legends',
    usernameLabel: 'League of Legends Username',
    teammates: 4
  },
  brawlstars: {
    label: 'Brawl Stars',
    usernameLabel: 'Brawl Stars ID',
    teammates: 2
  },
  csgo: {
    label: 'CS:GO',
    usernameLabel: 'Steam Username',
    teammates: 4
  }
};

export type Game = 'bedwars' | 'valorant' | 'league' | 'brawlstars' | 'csgo';

type GameRegister = {
  game: Game;
  step: number;
};

type GameRegisterContextProps = {
  gameRegister: GameRegister | undefined;
  startGameRegister: (game: Game) => void;
  stopGameRegister: () => void;
  getModalStep: () => JSX.Element | undefined;
  title?: string;
};

export const GameRegisterContext = React.createContext<GameRegisterContextProps>(
  {
    gameRegister: undefined,
    startGameRegister: (game) => {},
    stopGameRegister: () => {},
    getModalStep: () => undefined,
    title: ''
  }
);

const GameRegisterContextProvider = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [gameRegister, setGameRegister] = useState<GameRegister | undefined>(
    undefined
  );
  const [teammates, setTeammates] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [captain, setCaptain] = useState<boolean>(false);
  const { editUser, setAuth } = useAuth();
  const { user } = useContext(UserContext);

  const startGameRegister = (game: Game) => {
    setGameRegister({ game, step: 1 });
  };

  const nextStep = () => {
    if (gameRegister)
      setGameRegister({ ...gameRegister, step: gameRegister.step + 1 });
  };

  const stopGameRegister = () => {
    setGameRegister(undefined);
  };

  const getModalStep = () => {
    if (!gameRegister || !user) return;
    const { step, game } = gameRegister;
    const gameDict = registerDict[game];
    switch (step) {
      case 1:
        return (
          <FirstStep
            onFinish={async (content: { name: string }) => {
              setName(content.name);
              nextStep();
            }}
            usernameLabel={gameDict.usernameLabel}
          />
        );
      case 2:
        if (!gameDict.teammates) {
          nextStep();
          return;
        } else {
          return (
            <SecondStep
              onFinish={(content: any) => {
                const captain = content.captain;
                delete content.captain;
                setTeammates(
                  (Object.values(content) as string[]).filter(
                    (teammate) => teammate && teammate.length !== 0
                  )
                );
                setCaptain(captain);
                nextStep();
              }}
              teammates={gameDict.teammates}
              label={gameDict.label}
            />
          );
        }
      case 3:
        return <ThirdStep onFinish={nextStep} />;
      case 4:
        return (
          <FourthStep
            onFinish={async () => {
              const newUser = await setAuth(localStorage.token);
              if (!newUser.discord) {
                notification.error({
                  message: 'Error',
                  description:
                    'Your discord account has not yet been confirmed, please try again.'
                });
                return;
              }
              await editUser({
                [game]: {
                  participating: true,
                  teammates: teammates,
                  name: name,
                  captain: captain
                }
              });
              stopGameRegister();
              notification.success({
                message: 'Success',
                description: `You have successfully registed for ${gameDict.label}!`
              });
            }}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <GameRegisterContext.Provider
      value={{
        gameRegister: gameRegister,
        startGameRegister: startGameRegister,
        stopGameRegister: stopGameRegister,
        getModalStep: getModalStep,
        title: (gameRegister && registerDict[gameRegister.game].label) || ''
      }}
    >
      {children}
    </GameRegisterContext.Provider>
  );
};

export { GameRegisterContextProvider };
