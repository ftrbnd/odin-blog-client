import axios from 'axios';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUsername, updateId } from '../features/userSlice';

const LogIn: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'loginUsername':
        setUsername(e.target.value);
        break;
      case 'loginPassword':
        setPassword(e.target.value);
        break;
    }
  };

  const handleUsername = () => {
    if (!username || username.length < 3 || username.length > 10) {
      setUsernameError(true);
      return;
    }

    setUsernameError(false);
  };

  const handlePassword = () => {
    if (!password || password.length < 3 || password.length > 10) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (usernameError || !username) {
      setFormValid('Username must be 3-10 characters long.');
      return;
    }

    if (passwordError || !password) {
      setFormValid('Password must be 3-10 characters long.');
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post('/api/users/login', {
        username,
        password
      });
      console.log('LOGIN: ', response);

      setFormValid('');
      setIsLoading(false);

      dispatch(updateUsername(response.data.username));
      dispatch(updateId(response.data.id));
      navigate('/');
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Log In</h2>
      <label htmlFor="loginUsername">Username</label>
      <input id="loginUsername" placeholder="Username" type="text" onChange={(e) => handleInputChange(e)} onBlur={handleUsername} value={username} />
      <label htmlFor="loginPassword">Password</label>
      <input id="loginPassword" placeholder="Password" type="password" onChange={(e) => handleInputChange(e)} onBlur={handlePassword} value={password} />
      <button type="submit">Submit</button>
      {isLoading && <p>Submitting...</p>}
      {formValid && <p>{formValid}</p>}
    </form>
  );
};

export default LogIn;
