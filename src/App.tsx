import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  _id: string;
  username: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((res) => {
        setUsers(res.data.users);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
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
