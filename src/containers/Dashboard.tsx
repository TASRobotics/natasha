import styled from 'styled-components';

import { NavBar, SideBar } from '../components';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Dashboard = () => {
  return (
    <>
      <NavBar dashboard />
      <Container>
        <SideBar />
        <div>dashboard</div>
      </Container>
    </>
  );
};
