import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Store } from 'redux';
import store from 'app/store';
import App from 'app/app';

function run(store: Store) {
  const container = document.getElementById('root') as Element;
  hydrateRoot(
    container,
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

run(store);
