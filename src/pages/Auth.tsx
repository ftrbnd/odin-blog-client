import { FC } from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
import LogIn from '../components/LogIn';
import axios from 'axios';

const Auth: FC = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/users/logout');
      console.log(response);
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
    </>
  );
};

export default Auth;
