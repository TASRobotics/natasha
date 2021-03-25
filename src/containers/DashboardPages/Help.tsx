import { useContext } from 'react';
import styled from 'styled-components';
import { Title as BaseTitle } from '../../components';

import { UserContext } from '../../context';

const Title = styled(BaseTitle)`
  color: #000;
`;

export const Help = () => {
  const { user } = useContext(UserContext);

  if (!user) return <></>;

  return (
    <div>
      <Title>Frequently Asked Questions</Title>
    </div>
  );
};
