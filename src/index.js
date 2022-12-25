import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './Style/app.scss';
import { routes } from './routes';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('StreetFoody'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <CssBaseline/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
