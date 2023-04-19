import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';

import { renderApp } from './main';
import { fetchDataByUrl } from './data/fetchDataByUrl';
import { renderTemplate } from './renderTemplate';
import store from 'app/store';
import App from 'app/app';

const app = express();

app.use(express.static('dist'));

// app.get('/api/router-data', async (req, res) => {
//   try {
//     console.log('try');

//     res.json((await fetchDataByUrl(req.query.url.toString())));
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//       stack: err.stack
//     });
//   }
// });

app.get('*', async (req, res) => {
  /* Example with Empty content */
  // const content = '';

  /* Example with SSR */
  // const content = renderToString(renderApp);

  /* Example with Routing */
  // const context = {};

  // const content = renderToString(
  //   <StaticRouter location={req.url} context={context}>
  //     {renderApp}
  //   </StaticRouter>
  // );

  /* Example with Data */
  const context = {};
  // const data = await fetchDataByUrl(req.url);

  // const store = createStore((state) => state, data);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  res.send(
    renderTemplate({
      cssPath: 'styles.css',
      jsPath: 'main.js',
      content,
      // data: JSON.stringify(data),
    })
  );
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
