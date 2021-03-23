import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  UserContextProvider,
  LoadingContextProvider,
  GameRegisterContextProvider,
  MobileContextProvider
} from './context';
import './index.css';

ReactDOM.render(
  <UserContextProvider>
    <LoadingContextProvider>
      <GameRegisterContextProvider>
        <MobileContextProvider>
          <App />
        </MobileContextProvider>
      </GameRegisterContextProvider>
    </LoadingContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);
