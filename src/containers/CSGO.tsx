import React from 'react';
import { GamePage } from '../components';
import CSGOImg from '../assets/images/csgobackground.jpg';

export const CSGO = () => {
  const format = ['TBD'];

  return (
    <GamePage
      game='csgo'
      title='CS:GO'
      img={CSGOImg}
      description=''
      format={format}
      schedule={{
        date: 'April 7th',
        times: [
          { key: '1', time: '12:45', description: 'Wait in lobby' },
          { key: '2', time: '1:00', description: 'Round 1 begins' }
        ],
        moment: '2021-04-07'
      }}
    />
  );
};
