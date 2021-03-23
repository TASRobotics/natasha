import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GameRegisterContext, UserContext, MobileContext } from '../context';
import { GameCard } from './GameCard';
import { Container } from './Conainer';
import BedwarsLogo from '../assets/images/bedwarslogo.png';
import ValorantLogo from '../assets/images/valorantlogo.png';
import LeagueLogo from '../assets/images/leaguelogo.jpg';
import BrawlStarsLogo from '../assets/images/brawlstarslogo.png';
import CSGOLogo from '../assets/images/csgologo.png';

export const Games = () => {
  const history = useHistory();
  const { startGameRegister } = useContext(GameRegisterContext);
  const { user } = useContext(UserContext);
  const { mobile } = useContext(MobileContext);

  let style: { [key: string]: string } = {
    display: 'flex',
    justifyContent: 'space-between'
  };
  if (mobile)
    style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

  return (
    <>
      <Container style={style}>
        <GameCard
          img={BedwarsLogo}
          title='Bedwars'
          points={['16 players per game', 'Teams of two']}
          onClick={() => {
            history.push('/bedwars');
          }}
          onButtonClick={() => {
            startGameRegister('bedwars');
            if (!user) history.push('/auth');
          }}
          disabled={Boolean(user && user.bedwars.participating)}
        />
        <GameCard
          img={LeagueLogo}
          title='League of Legends'
          points={['10 players per game', 'Teams of five']}
          onClick={() => {
            history.push('/league');
          }}
          onButtonClick={() => {
            startGameRegister('league');
            if (!user) history.push('/auth');
          }}
          disabled={Boolean(user && user.league.participating)}
        />
        <GameCard
          img={ValorantLogo}
          title='Valorant'
          points={['10 players per game', 'Teams of five']}
          onClick={() => {
            history.push('/valorant');
          }}
          onButtonClick={() => {
            startGameRegister('valorant');
            if (!user) history.push('/auth');
          }}
          disabled={Boolean(user && user.valorant.participating)}
        />
        <GameCard
          img={BrawlStarsLogo}
          title='Brawl Stars'
          points={['6 players per game', 'Teams of three']}
          onClick={() => {
            history.push('/brawlstars');
          }}
          onButtonClick={() => {
            startGameRegister('brawlstars');
            if (!user) history.push('/auth');
          }}
          disabled={Boolean(user && user.brawlstars.participating)}
        />
        <GameCard
          img={CSGOLogo}
          title='CS:GO'
          points={['10 players per game', 'Teams of five']}
          onClick={() => {
            history.push('/csgo');
          }}
          onButtonClick={() => {
            startGameRegister('csgo');
            if (!user) history.push('/auth');
          }}
          disabled={Boolean(user && user.csgo.participating)}
        />
      </Container>
    </>
  );
};
