import React from 'react';
import { GamePage } from '../components';
import BedwarsImg from '../assets/images/bedwars.jpg';

export const Bedwars = () => {
  const format = [
    'Teams of 2 players will be randomly assigned to 1 of 4 groups with 3 other teams, with each group having a total of 16 players and 8 teams',
    {
      main: 'Teams will then play 3 rounds with all the teams in their group',
      sub: [
        'The average rank of each team will be calculated and the top 2 teams will advance to the finals'
      ]
    },
    'The top 8 teams will play in a final round in a winner takes all'
  ];

  return (
    <GamePage
      game='bedwars'
      title='Minecraft Bedwars'
      img={BedwarsImg}
      description="In the game, each team has its own island and there is a bed on the island. The players have to try to defend it from destruction by blocks that they can buy in the item shop. If the bed is destroyed, the players in the team can not respawn. In the player's own islands, there is a 'hole-in-the-wall', four-by-four block place called a forge. The forge can give the players gold and iron, which can be spent in the item shop. There are also diamond islands and an emerald island that is frequently called 'spawn' or 'mid'. The players can collect diamonds or emeralds at these islands. Emeralds allow the player to upgrade their own items while diamonds allow the player to upgrade stuff for their team, especially their forge. The objective of this game is to ultimately survive."
      format={format}
      schedule={{
        date: 'April 5th',
        times: [
          { key: '1', time: '12:45', description: 'Wait in lobby' },
          { key: '2', time: '1:00', description: 'Round 1 begins' }
        ],
        moment: '2021-04-05'
      }}
    />
  );
};
