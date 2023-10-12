import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function LoginUser() {
    const user = {
      email,
      password,
    };
    try {
      const result = (await axios.post('/api/users/login', user)).data;
      localStorage.setItem('currentuser', JSON.stringify(result));
      window.location.href = '/test';
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="home-container">
      <h1>Login</h1>
      <form action="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </form>
      <button onClick={LoginUser} className="btn-sign btn-login">
        Login
      </button>
      <Link to="/register">
        <button className="btn-sign seclogin">Register</button>
      </Link>
    </div>
  );
};

export default Login;
