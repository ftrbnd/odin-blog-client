import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch.tsx';
import { UserProvider } from './context/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouteSwitch />
    </UserProvider>
  </React.StrictMode>
);
