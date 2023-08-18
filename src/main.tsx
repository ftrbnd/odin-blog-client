import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteSwitch />
    </Provider>
  </React.StrictMode>
);
