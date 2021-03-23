import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  UserContextProvider,
  LoadingContextProvider,
  MobileContextProvider
} from './context';
import './index.css';

require('typeface-poppins');

ReactDOM.render(
  <UserContextProvider>
    <LoadingContextProvider>
      <MobileContextProvider>
        <App />
      </MobileContextProvider>
    </LoadingContextProvider>
  </UserContextProvider>,
  document.getElementById('root')
);
