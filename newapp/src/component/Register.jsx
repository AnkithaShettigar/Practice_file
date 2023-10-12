import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/", {
          name: state.name,
          email: state.email,
          number: state.number,
          password: state.password,
          repassword: state.repassword,
        })
        .then((res) => {
          if ((res.data === "exist")) {
            alert("user already exists");
          } else if ((res.data === "not exist")) {
            history("/home", { state: { id: state.email } });
          }
        })
        .catch((e) => {
          // alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }

    console.log("value", state);
  };
  return (
    <div>
      <div className="form">
        <h1>Register Form</h1>
        <form action="POST">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <label>Email:</label>

          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <label>Contact:</label>

          <input
            type="number"
            placeholder="Enter contact details"
            name="number"
            value={state.number}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <label>Confirm Password:</label>

          <input
            type="password"
            placeholder="Re-enter password"
            name="repassword"
            value={state.repassword}
            onChange={handleChange}
          />
          <button onClick={onClick}>Register</button>
          <p>or</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
