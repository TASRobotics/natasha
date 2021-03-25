import styled from 'styled-components';

import { Title } from './Title';
import { SubTitle } from './SubTitle';
import { PricingOption } from './PricingOption';
import { Button as BaseButton } from './Button';
import { Testimonial } from './Testimonial';
import { Link } from './Link';
import Profile from '../assets/images/profile.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 138px 0px;
`;

const PricingOptionsContainer = styled.div`
  margin-top: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactContainer = styled.div`
  max-width: 1218px;
  margin: 186px 0px;
`;

const SmallTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #00c9dd;
  margin-bottom: 34px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 38px 44px 36px 76px;
  height: 172px;
  max-width: 1218px;
  background: #eae9ff;

  font-size: 24px;
  font-weight: 500;
`;

const Button = styled(BaseButton)`
  margin-left: 171px;
  flex: 1 0 auto;
`;

export const PricingPage = () => {
  return (
    <Container>
      <Title>NATASHA Pricing</Title>
      <SubTitle>Join us in helping you</SubTitle>
      <PricingOptionsContainer>
        <PricingOption
          name='Basic'
          cost='FREE'
          content={[
            'Great ipsum dolor sit amet, cosuspendisse non i',
            'Great ipsum dolor sit amet, cosuspendisse non i',
            'Great ipsum dolor sit amet, cosuspendisse non i'
          ]}
        />
        <PricingOption
          name='Basic'
          cost='FREE'
          content={[
            'Great ipsum dolor sit amet, cosuspendisse non i',
            'Great ipsum dolor sit amet, cosuspendisse non i',
            'Great ipsum dolor sit amet, cosuspendisse non i'
          ]}
        />
        <PricingOption
          name='Basic'
          cost='FREE'
          content={[
            'Great ipsum dolor sit amet, cosuspendisse non i',
            'Great ipsum dolor sit amet, cosuspendisse non i',
            'Great ipsum dolor sit amet, cosuspendisse non i'
          ]}
        />
      </PricingOptionsContainer>
      <ContactContainer>
        <SmallTitle>Can't find what you're looking for?</SmallTitle>
        <Box>
          <div>
            Great ipsum dolor sit amet, consectetur adipiscing elit. Ut
            imperdiet massa velit feugiat. Morbi nullam condimentum vitae,
            quisque erat facilisis suspendisse non i
          </div>
          <Button>CONTACT US</Button>
        </Box>
      </ContactContainer>
      <Testimonial
        direction='left'
        quote='WOw ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet massa velit feugiat. Morbi nullam condimentum vitae, quisque erat facilisis suspendisse non in. Orci non at tincidunt pulvinar curabitur proin eget congue eget. Sed amet augue commodo, suspendisse nullam.'
        name='BOB CHEN'
        description='xx stroke patient'
        img={Profile}
      />
      <Link>READ MORE STORIES {'->'}</Link>
    </Container>
  );
};
