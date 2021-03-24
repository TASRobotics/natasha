import styled from 'styled-components';
import { Title as BaseTitle } from './Title';

const Container = styled.div`
  height: 478px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled(BaseTitle)`
  color: #007985;
  margin-right: 80px;
`;

const FormContainer = styled.div`
  display: flex;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  height: 176px;
  width: 283px;
  padding: 13px 16px;
  border-radius: 8px;
  background-color: #ecf1f4;
  border: 0;
  outline: none;
  margin-left: 23px;
  resize: none;
  box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
  &::placeholder {
    color: #8c8ca1;
  }
`;

const Input = styled.input`
  width: 230px;
  padding: 13px 16px;
  background-color: #ecf1f4;
  border: 0;
  border-radius: 8px;
  box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
  outline: none;
  &::placeholder {
    color: #8c8ca1;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ContactUs = () => {
  return (
    <Container>
      <Title>Contact Us:</Title>
      <FormContainer>
        <DetailsContainer>
          <Input placeholder='First'></Input>
          <Input placeholder='Last'></Input>
          <Input placeholder='Email'></Input>
        </DetailsContainer>
        <TextArea
          style={{ height: 176 }}
          placeholder='We are here to listen...'
        />
      </FormContainer>
    </Container>
  );
};
