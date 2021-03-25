import styled from 'styled-components';

import { Title } from './Title';
import { SubTitle } from './SubTitle';
import { Input } from './Input';
import { Button as BaseButton } from './Button';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 102px 0px;
`;

const Container = styled.div`
  background-color: #eae9ff;
  height: 1160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlackTitle = styled(Title)`
  color: #000;
  margin-right: 200px;
`;

const FormContainer = styled.div`
  width: 511px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TextArea = styled.textarea`
  height: 593px;
  width: 100%;
  margin: 8px 0px;
  padding: 13px 16px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #00c9dd;
  box-shadow: 0px 0px 0px 4px rgba(75, 77, 237, 0.2);
  outline: none;
  resize: none;
  &::placeholder {
    color: #8c8ca1;
  }
`;

const NameInput = styled(Input)`
  width: 230px;
  margin: 8px 0px;
`;

const EmailInput = styled(Input)`
  width: 100%;
  margin: 8px 0px;
`;

const Button = styled(BaseButton)`
  margin-top: 24px;
  background-color: #fff;
  color: #00c9dd;
  margin-left: auto;
`;

export const ContactUsPage = () => {
  return (
    <>
      <TitleContainer>
        <SubTitle>We want to be comfortable</SubTitle>
        <Title>Talk to Us</Title>
      </TitleContainer>
      <Container>
        <BlackTitle>Contact Us:</BlackTitle>
        <FormContainer>
          <NameContainer>
            <NameInput placeholder='First' />
            <NameInput placeholder='Last' />
          </NameContainer>
          <EmailInput placeholder='Email' />
          <TextArea placeholder='Content' />
          <Button>SEND</Button>
        </FormContainer>
      </Container>
    </>
  );
};
