import React from 'react';
import { GamePage } from '../components';
import ValorantImg from '../assets/images/valorantbackground.jpg';

export const Valorant = () => {
  const format = [
    'Each team’s roster must consist of at least 5 players.',
    'Each team’s roster will be allowed to have 5 main players and 1 substitute. Once the tournament starts, you cannot replace any player.',
    'A substitute player may only be added before the Tournament Start.',
    'This player cannot be part of any other team’s roster which is participating or has participated in the same tournament.',
    '8 teams will play a single elimination bracket with each round consisting of 1 game, there will be no losers bracket',
    'Finals will be a best 3',
    {
      main: 'Map picking:',
      sub: [
        {
          main: 'BO1',
          sub: [
            'Team 1 bans a map from the map pool.',
            'Team 2 bans a map from the map pool.',
            'Team 1 picks a map from the remaining 2 maps.',
            'Team 2 will pick a side (Attackers/Defenders) to start on.'
          ]
        },
        {
          main: 'BO3',
          sub: [
            'The team on top pick 1st map',
            'The team on bottom pick a side (Atk/Def) to start on',
            'Vice versa for other two games'
          ]
        }
      ]
    }
  ];

  return (
    <GamePage
      game='valorant'
      title='Valorant'
      img={ValorantImg}
      imgStyle={{ backgroundPosition: 'center 20%' }}
      description='Valorant is a team-based tactical shooter and first-person shooter set in the near-future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.'
      format={format}
      schedule={{
        date: 'April 9th',
        times: [
          { key: '1', time: '12:45', description: 'Wait in lobby' },
          { key: '2', time: '1:00', description: 'Round 1 begins' }
        ],
        moment: '2021-04-09'
      }}
    />
  );
};
