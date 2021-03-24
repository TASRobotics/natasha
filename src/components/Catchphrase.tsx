import styled from 'styled-components';

import { Title } from './Title';
import { SubTitle as SubSubTitle } from './SubTitle';
import Logo from '../assets/images/homepagelogo.png';

const Container = styled.div`
  height: 904px;
  background-color: #007985;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 520px;
  height: 361px;
`;

const SubTitle = styled.div`
  margin-top: 8px;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

export const Catchphrase = () => {
  return (
    <Container>
      <Img src={Logo} alt='logo' />
      <Title>Everyone's personal stroke therapist</Title>
      <SubTitle>
        With <strong>NATASHA</strong>, take therapy into your own hands
      </SubTitle>
      <SubSubTitle>GET STARTED {'->'}</SubSubTitle>
    </Container>
  );
};
