import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context';

type PrivateRouteProps = {
  children: React.ReactNode;
  path?: string;
};

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
  const { user } = useContext(UserContext);

  return (
    <Route {...rest}>
      {user ? children : <Redirect to={{ pathname: '/' }} />}
    </Route>
  );
};

export { PrivateRoute };
