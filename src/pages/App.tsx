import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

interface User {
  _id: string;
  username: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [userContext, setUserContext] = useContext(UserContext);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => {
        setUsers(res.data.users);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const verifyUser = useCallback(() => {
    axios
      .post('/api/users/refreshToken')
      .then((res) => {
        if (res.status == 200) {
          setUserContext((oldValues) => {
            return { ...oldValues, token: res.data.token };
          });
        } else {
          setUserContext((oldValues) => {
            return { ...oldValues, token: null };
          });
        }
        // call refreshToken every 5 minutes to renew the authentication token.
        setTimeout(verifyUser, 5 * 60 * 1000);
      })
      .catch((err) => console.error(err));
  }, [setUserContext]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <div>
      <h6>{userContext.token ? userContext.token : 'hi'}</h6>
      <ul>
        <h1>Users:</h1>
        {isLoading ? <p>Loading...</p> : users.map((user, i) => <li key={i}>{user.username}</li>)}
      </ul>
      <Link to={'/auth'}>
        <button>Auth</button>
      </Link>
    </div>
  );
};

export default App;
