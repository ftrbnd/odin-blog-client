import { FC } from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn';

const Auth: FC = () => {
  return (
    <>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      <SignUp />
      <LogIn />
    </>
  );
};

export default Auth;
