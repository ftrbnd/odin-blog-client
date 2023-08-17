import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import App from './App';

const RouteSwitch: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
