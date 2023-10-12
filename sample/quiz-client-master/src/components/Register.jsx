import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  async function signUp() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        const result = await (
          await axios.post('/api/users/register', user)
        ).data;
        console.log(result);
        window.location.href = '/login';
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('password not mactch');
    }
  }

  return (
    <div className="home-container">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />{' '}
        <br />
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
        <br />
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          placeholder="cpassword"
        />
      </form>
      <button onClick={signUp} className="btn-sign">
        Register
      </button>
      <Link to="/login">
        <button className="btn-sign seclogin">Login</button>
      </Link>
    </div>
  );
};

export default Register;
