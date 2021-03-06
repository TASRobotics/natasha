import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { NavBar, SideBar } from '../components';
import { Account, Games, Therapist, Help, Report } from './DashboardPages';

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #eae9ff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  padding: 80px 90px;
  width: 0px;
  flex: 1 0 0px;
`;

export const Dashboard = () => {
  return (
    <Wrapper>
      <NavBar dashboard />
      <Container>
        <SideBar />
        <Content>
          <Switch>
            <Route path='/dashboard/report'>{<Report />}</Route>
            <Route path='/dashboard/help'>{<Help />}</Route>
            <Route path='/dashboard/therapist'>{<Therapist />}</Route>
            <Route path='/dashboard/games'>{<Games />}</Route>
            <Route path='/dashboard'>{<Account />}</Route>
          </Switch>
        </Content>
      </Container>
    </Wrapper>
  );
};
