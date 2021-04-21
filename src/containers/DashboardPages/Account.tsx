import { useContext } from 'react';
import styled from 'styled-components';
import {
  Title as BaseTitle,
  Link as BaseLink,
  AccountSettings
} from '../../components';

import { UserContext } from '../../context';

const Title = styled(BaseTitle)`
  color: #000;
  margin-bottom: 23px;
`;

const Plan = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  color: #007985;
  font-size: 24px;
  font-weight: 700;

  padding: 12px 24px;
`;

const Link = styled(BaseLink)`
  margin-top: 0;
  margin-left: 34px;
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

export const Account = () => {
  const { user } = useContext(UserContext);

  if (!user) return <></>;

  return (
    <div>
      <Title>Hello {user.firstName}</Title>
      <TopDiv>
        <Plan>Wellness Plan</Plan>
        <Link>UPGRADE NOW {'->'}</Link>
      </TopDiv>
      <AccountSettings
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
    </div>
  );
};
