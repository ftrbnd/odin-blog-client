import { FC } from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
import LogIn from '../components/LogIn';
import axios from 'axios';

const Auth: FC = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/users/logout');
      console.log('LOGOUT: ', response);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRefreshToken = async () => {
    try {
      const response = await axios.post('/api/users/refreshToken');
      console.log('REFRESH: ', response);
    } catch (e) {
      console.error(e);
    }
  };

  const getMe = async () => {
    try {
      const response = await axios.get('/api/users/me');
      console.log('ME: ', response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      <SignUp />
      <LogIn />
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleRefreshToken}>Refresh Token</button>
      <button onClick={getMe}>Me</button>
    </>
  );
};

export default Auth;
