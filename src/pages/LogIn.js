import { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // On Log In
  const onLogIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password');
    } else if (email && password) {
      alert('Logged In Successfully!');
    }

    // Clearing form
    setEmail('');
    setPassword('');

    // setMessage('HELLO');
    // console.log(message);
  };

  return (
    <div className="log-in">
      <form>
        <input
          className="input"
          type="email"
          placeholder="Email Id"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="button is-primary" onClick={onLogIn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
