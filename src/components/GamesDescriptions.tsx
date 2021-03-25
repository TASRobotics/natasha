import styled from 'styled-components';

import { Title } from './Title';
import { SubTitle } from './SubTitle';
import { GameDescription } from './GameDescription';
import Profile from '../assets/images/profile.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 102px 0px 220px 0px;
`;

export const GamesDescriptions = () => {
  return (
    <Container>
      <SubTitle>Try It. Feel It.</SubTitle>
      <Title>Games that don't feel</Title>
      <Title>like games</Title>
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
      <GameDescription
        title='WOOO GAME 1'
        description='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        type='AR/VR'
        time='15 Mins'
        img={Profile}
      />
    </Container>
  );
};
