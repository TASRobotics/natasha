import { useContext } from 'react';
import styled from 'styled-components';
import {
  Title as BaseTitle,
  SubTitle as BaseSubTitle,
  TextArea as BaseTextArea,
  Button as BaseButton
} from '../../components';

import { UserContext } from '../../context';

const Title = styled(BaseTitle)`
  color: #000;
`;

const SubTitle = styled(BaseSubTitle)`
  color: #000;
`;

const TextArea = styled(BaseTextArea)`
  margin-top: 68px;
  height: 200px;
`;

const Button = styled(BaseButton)`
  margin-top: 24px;
  width: 100%;
`;

export const Help = () => {
  const { user } = useContext(UserContext);

  if (!user) return <></>;

  return (
    <div>
      <Title>Support</Title>
      <SubTitle>Please describe your problem.</SubTitle>
      <TextArea placeholder='Report your problem.' />
      <Button>Submit</Button>
    </div>
  );
};
