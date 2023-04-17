import React, { ReactNode } from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import store from './app/store';
import { Provider } from 'react-redux';

if (!sessionStorage.getItem('page')) sessionStorage.setItem('page', 'Home');

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const app = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
if (process.env.NODE_ENV) {
  ReactDOM.render(app, document.getElementById('root'));
} else {
  ReactDOM.hydrate(app, document.getElementById('root'));
}
