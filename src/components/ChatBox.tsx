import { FC } from 'react';
import styled from 'styled-components';

import { Button as BaseButton } from './Button';
import { Input as BaseInput } from './Input';

const Container = styled.div`
  position: relative;

  padding: 50px 60px;

  height: 544px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-top: 69px;
`;

const Name = styled.div`
  position: absolute;
  left: -24px;
  top: -22px;

  background: #007985;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 24px;
  font-weight: 700;
  color: #fff;

  padding: 20px 36px;
`;

const ReassignButton = styled.button`
  position: absolute;
  top: 66px;
  left: -24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  color: #fff;
  border: 0px;
  background: #0e0e2c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 16px;
  font-weight: 500;

  user-select: none;
  outline: none;
  cursor: pointer;
`;

const TextfieldContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SendButton = styled(BaseButton)`
  background: #eae9ff;
  color: #007985;
`;

const Textfield = styled(BaseInput)`
  flex: 1 0 auto;
  margin-right: 14px;
`;

type ChatBoxProps = {
  name: string;
};

export const ChatBox: FC<ChatBoxProps> = ({ name }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <ReassignButton>Reassign Therapist</ReassignButton>
      <TextfieldContainer>
        <Textfield placeholder='Aa' />
        <SendButton>SEND</SendButton>
      </TextfieldContainer>
    </Container>
  );
};
