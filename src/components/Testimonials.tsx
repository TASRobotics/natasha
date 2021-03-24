import styled from 'styled-components';

import Profile from '../assets/images/profile.png';
import { Testimonial } from './Testimonial';
import { SubTitle } from './SubTitle';

const Container = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Testimonials = () => {
  return (
    <Container>
      <Testimonial
        direction='right'
        quote='Great ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        name='BOB CHEN'
        description='xx stroke patient'
        img={Profile}
      />
      <Testimonial
        direction='left'
        quote='WOw ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        name='BOB CHEN'
        description='xx stroke patient'
        img={Profile}
      />
      <SubTitle>READ MORE STORIES {'->'}</SubTitle>
    </Container>
  );
};
