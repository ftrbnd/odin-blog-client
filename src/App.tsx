import axios from 'axios';
import { useEffect, useState } from 'react';

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
      <h1>Users</h1>
      {isLoading ? <p>Loading...</p> : users.map((user, i) => <p key={i}>{user.username}</p>)}
    </div>
  );
};

export default App;
