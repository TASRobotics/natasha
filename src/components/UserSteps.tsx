import { FC } from 'react';
import styled from 'styled-components';

import { Title } from './Title';
import { UserStep } from './UserStep';
import { SubTitle } from './SubTitle';
import StepOne from '../assets/images/stepone.png';
import StepTwo from '../assets/images/steptwo.png';
import StepThree from '../assets/images/stepthree.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0px 106px 0px;
`;

const Catchphrase = styled.div`
  color: #00c9dd;
  font-size: 24px;
  font-weight: 500;
`;

type UserStepsProps = {
  guide?: boolean;
};

export const UserSteps: FC<UserStepsProps> = ({ guide }) => {
  const titleNode = guide ? (
    <Title>User Guide to NATASHA</Title>
  ) : (
    <>
      <Title>Your first three steps to</Title>
      <Title>your next great step</Title>
    </>
  );

  return (
    <Container>
      <Catchphrase>
        {guide ? 'Try it. Feel It.' : 'This is. A Catch Phrase.'}
      </Catchphrase>
      {titleNode}
      <UserStep
        direction='right'
        title='Connect'
        number={1}
        content={[
          'do ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit',
          'then Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in.',
          'click Orci non at tincidunt pulvinar curabitur proin eget congue eget.'
        ]}
        img={StepOne}
      />
      <UserStep
        direction='left'
        title='Play'
        number={2}
        content={[
          'do ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit',
          'then Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in.',
          'click Orci non at tincidunt pulvinar curabitur proin eget congue eget.'
        ]}
        img={StepTwo}
      />
      <UserStep
        direction='right'
        title='Feedback'
        number={3}
        content={[
          'do ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit',
          'then Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in.',
          'click Orci non at tincidunt pulvinar curabitur proin eget congue eget.'
        ]}
        img={StepThree}
      />
      <SubTitle>LEARN MORE {'->'}</SubTitle>
    </Container>
  );
};
