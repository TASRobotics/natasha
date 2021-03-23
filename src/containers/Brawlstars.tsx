import React from 'react';
import { GamePage } from '../components';
import BrawlstarsImg from '../assets/images/brawlstarsbackground.jpg';

export const Brawlstars = () => {
  const rules = [
    {
      main: 'Teams will play in a a best of 3 bracket',
      sub: ['The finals will be a best of 5']
    },
    'Maps will be predetermined for each stage of the bracket',
    'There will be no bans for brawlers used in each game'
  ];

  return (
    <GamePage
      game='brawlstars'
      title='Brawl Stars'
      img={BrawlstarsImg}
      imgStyle={{ backgroundPosition: 'center 70%' }}
      description='Since many people requested 3v3s as opposed to solo showdown, we will be hosting the Brawl stars using premade teams. The game modes and maps will be announced soon, and all games on the same bracket level ie. quarter finals will be played on the same map and game mode. With the exception of the finals which will be a best of three, all matches will be single elimination.'
      format={rules}
      schedule={{
        date: 'April 6th',
        times: [
          { key: '1', time: '12:45', description: 'Wait in lobby' },
          { key: '2', time: '1:00', description: 'Round 1 begins' }
        ],
        moment: '2021-04-06'
      }}
    />
  );
};
