import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';

import { renderApp } from './main';
import { restoreDataOnClient } from './data/restoreDataOnClient';
import { reducer } from './reducer';
import store from 'app/store';
import App from 'app/app';

function run(store: Store) {
  hydrate(
    // renderApp,

    // <BrowserRouter>{renderApp}</BrowserRouter>,
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,

    document.getElementById('root')
  );
}

// const store = createStore(reducer, restoreDataOnClient());

run(store);
