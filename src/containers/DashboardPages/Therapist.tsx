import { useContext } from 'react';
import styled from 'styled-components';

import {
  Title as BaseTitle,
  ChatBox,
  SubTitle as BaseSubTitle
} from '../../components';
import { UserContext } from '../../context';

const Title = styled(BaseTitle)`
  color: #000;
`;

const SubTitle = styled(BaseSubTitle)`
  color: #000;
`;

export const Therapist = () => {
  const { user } = useContext(UserContext);

  if (!user) return <></>;

  return (
    <div>
      <Title>Therapist</Title>
      <SubTitle>Chat with your therapist</SubTitle>
      <ChatBox name='Dr. XYZ' />
    </div>
  );
};
