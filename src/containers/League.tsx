import React from 'react';
import { GamePage } from '../components';
import LeagueImg from '../assets/images/leaguebackground.jpg';

export const League = () => {
  const format = [
    '8 teams will play a single elimination bracket with each round consisting of 1 game, there will be no losers bracket',
    'Finals will be a best 3'
  ];

  return (
    <GamePage
      game='league'
      title='League of Legends'
      img={LeagueImg}
      description="League will be played on the classic summoner's rift 5 versus 5, with basic draft mode. Drafts will not be done in a competitive style with two stage banning. You will be using your own account, so if you do not have enough champions to play draft mode, you will not be allowed to play. Only the champions you have will be available to you. Do note that this is being hosted on the Garena Server!"
      format={format}
      schedule={{
        date: 'April 8th',
        times: [
          { key: '1', time: '12:45', description: 'Wait in lobby' },
          { key: '2', time: '1:00', description: 'Round 1 begins' }
        ],
        moment: '2021-04-08'
      }}
    />
  );
};
