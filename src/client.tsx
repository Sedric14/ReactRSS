import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';

import { renderApp } from './main';
import { restoreDataOnClient } from './data/restoreDataOnClient';
// import { reducer } from './reducer';
import store from 'app/store';
import App from 'app/app';

function run(store: Store) {
  console.log('hydrate');
  const container = document.getElementById('root') as Element;
  hydrateRoot(
    container,
    // renderApp,
    // document.getElementById('root'),
    // <BrowserRouter>{renderApp}</BrowserRouter>,
    <Provider store={store}>
      <BrowserRouter>{renderApp}</BrowserRouter>
    </Provider>
  );
}

// const store = createStore(reducer, restoreDataOnClient());

run(store);
