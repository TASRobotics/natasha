import styled from 'styled-components';
import { Title } from './Title';
import { SubTitle } from './SubTitle';
import { Link as BaseLink } from './Link';

const Container = styled.div`
  background-color: #007985;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 478px;
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 12px 24px;
  background-color: #fff;
  color: #00c9dd;
  border: 0px;
  border-radius: 8px;
  box-shadow: 4px 4px 0.5px rgba(14, 14, 44, 0.4);

  font-size: 16px;
  font-weight: 700;

  user-select: none;
  outline: none;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const Link = styled(BaseLink)`
  color: #fff;
  font-weight: 500;
  margin-left: 15px;
  font-size: 14px;
`;

export const TryItYourself = () => {
  return (
    <Container>
      <SubTitle>Try it yourself!</SubTitle>
      <Title>NATASHA is ready for you</Title>
      <ButtonDiv>
        <Button>GET STARTED FOR FREE</Button>
        <Link>Questions? Contact Us {'->'}</Link>
      </ButtonDiv>
    </Container>
  );
};
