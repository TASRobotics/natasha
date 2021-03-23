import React, { useState } from 'react';

type Game = {
  participating: boolean;
  teammates: string[];
  name: string;
  captain: boolean;
};

export type User = {
  bedwars: Game;
  league: Game;
  valorant: Game;
  brawlstars: Game;
  csgo: Game;
  discord: string;
};

type UserContextProps = {
  user?: User;
  setUser: (user: User | undefined) => void;
};

export const UserContext = React.createContext<UserContextProps>({
  user: undefined,
  setUser: (user) => {}
});

const UserContextProvider = ({
  children
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
