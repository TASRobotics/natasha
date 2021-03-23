import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spin, Modal, Button } from 'antd';
import axios from 'axios';
import {
  Home,
  Auth,
  Bedwars,
  Valorant,
  League,
  Brawlstars,
  CSGO,
  AboutUs,
  Rules,
  MyAccount,
  Admin
} from './containers';
import { LoadingContext, GameRegisterContext, UserContext } from './context';
import { useAuth } from './hooks';
import { PrivateRoute } from './components';
import 'antd/dist/antd.css';

axios.defaults.baseURL = 'http://localhost:5000/api';

const App = () => {
  const { loading } = useContext(LoadingContext);
  const { gameRegister, stopGameRegister, getModalStep, title } = useContext(
    GameRegisterContext
  );
  const { user } = useContext(UserContext);
  const { setAuth } = useAuth();

  useEffect(() => {
    setAuth(localStorage.token);
  }, []);

  return (
    <BrowserRouter>
      <Spin spinning={loading} size='large'>
        <Switch>
          <PrivateRoute path='/myaccount'>{<MyAccount />}</PrivateRoute>
          <Route path='/admin'>{<Admin />}</Route>
          <Route path='/aboutus'>{<AboutUs />}</Route>
          <Route path='/csgo'>{<CSGO />}</Route>
          <Route path='/brawlstars'>{<Brawlstars />}</Route>
          <Route path='/league'>{<League />}</Route>
          <Route path='/valorant'>{<Valorant />}</Route>
          <Route path='/bedwars'>{<Bedwars />}</Route>
          <Route path='/auth'>{<Auth />}</Route>
          <Route path='/rules'>{<Rules />}</Route>
          <Route path='/'>{<Home />}</Route>
        </Switch>
        <Modal
          title={`${title} Game Sign Up`}
          visible={Boolean(gameRegister) && Boolean(user)}
          onOk={() => {}}
          onCancel={stopGameRegister}
          footer={[
            <Button key='back' onClick={stopGameRegister}>
              Cancel
            </Button>
          ]}
        >
          {getModalStep()}
        </Modal>
      </Spin>
    </BrowserRouter>
  );
};

export default App;
