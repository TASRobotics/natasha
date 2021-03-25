import styled from 'styled-components';

import { Title } from './Title';
import { Link } from './Link';
import { SubTitle } from './SubTitle';
import Logo from '../assets/images/homepagelogo.png';

const Container = styled.div`
  margin-top: -10px;
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

export const Catchphrase = () => {
  return (
    <Container>
      <Img src={Logo} alt='logo' />
      <Title>Everyone's personal stroke therapist</Title>
      <SubTitle style={{ color: '#fff' }}>
        With <strong>NATASHA</strong>, take therapy into your own hands
      </SubTitle>
      <Link>GET STARTED {'->'}</Link>
    </Container>
  );
};
