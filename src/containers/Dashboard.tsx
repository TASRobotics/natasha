import styled from 'styled-components';

import { NavBar, SideBar } from '../components';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Dashboard = () => {
  return (
    <Wrapper>
      <NavBar dashboard />
      <Container>
        <SideBar />
        <div>dashboard</div>
      </Container>
    </Wrapper>
  );
};
