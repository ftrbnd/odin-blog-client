import axios from 'axios';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
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

      const signUpResponse = await axios.post('/api/users/signup', {
        username,
        password
      });
      console.log('SIGNUP: ', signUpResponse);

      setFormValid('');
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  return (
    <>
      <Link to={'/'}>
        <button>Home</button>
      </Link>

      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username</label>
        <input id="username" placeholder="Username" type="text" onChange={(e) => handleInputChange(e)} onBlur={handleUsername} value={username} />
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="Password" type="password" onChange={(e) => handleInputChange(e)} onBlur={handlePassword} value={password} />
        <button type="submit">Submit</button>
        {isLoading && <p>Submitting...</p>}
        {formValid && <p>{formValid}</p>}
      </form>
    </>
  );
};

export default SignUp;
