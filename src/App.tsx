import { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import axios from 'axios';
import {
  Home,
  Login,
  Register,
  Dashboard,
  Guide,
  Games,
  Contact
} from './containers';
import { LoadingContext } from './context';
import { useAuth } from './hooks';
import { PrivateRoute } from './components';
import 'antd/dist/antd.css';

axios.defaults.baseURL = 'http://localhost:5000/api';

const App = () => {
  const { loading } = useContext(LoadingContext);
  const { setAuth } = useAuth();

  useEffect(() => {
    setAuth(localStorage.token);
  }, []);

  return (
    <BrowserRouter>
      <Spin spinning={loading} size='large'>
        <Switch>
          <PrivateRoute path='/dashboard'>{<Dashboard />}</PrivateRoute>
          <Route path='/contact'>{<Contact />}</Route>
          <Route path='/games'>{<Games />}</Route>
          <Route path='/guide'>{<Guide />}</Route>
          <Route path='/register'>{<Register />}</Route>
          <Route path='/login'>{<Login />}</Route>
          <Route path='/'>{<Home />}</Route>
        </Switch>
      </Spin>
    </BrowserRouter>
  );
};

export default App;
