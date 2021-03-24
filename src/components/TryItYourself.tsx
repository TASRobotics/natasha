import styled from 'styled-components';
import { Title } from './Title';

const Container = styled.div`
  background-color: #007985;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 478px;
`;

const Text = styled.div`
  color: #00c9dd;
  font-size: 24px;
  font-weight: 500;
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

const ButtonLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-left: 15px;
`;

export const TryItYourself = () => {
  return (
    <Container>
      <Text>Try it yourself!</Text>
      <Title>NATASHA is ready for you</Title>
      <ButtonDiv>
        <Button>GET STARTED FOR FREE</Button>
        <ButtonLabel>Questions? Contact Us {'->'}</ButtonLabel>
      </ButtonDiv>
    </Container>
  );
};
