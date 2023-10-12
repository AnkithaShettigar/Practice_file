import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const history = useNavigate()
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 async function submit(e){
    e.preventDefault()
    try {
        await axios.post("http://localhost:5000/login", {
          email:state.email,
          password:state.password,
        })
        .then(res=>{
          if(res.data === "exist"){
            history("/home",{state:{id:state.email}})
          }else if(res.data === "not exist"){
            // alert("user not exists")
          }
        })
        .catch(e=>{
          // alert("wrong details")
          console.log(e);
        })
      } catch (e) {
          console.log(e);
      }
    console.log("value",state);
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form action="POST">
        {" "}
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="email"
          value={state.email}
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
        <button onClick={submit}>Login</button>
        <p>OR</p>
        <Link to = '/'><button>Register</button></Link>
        
      </form>
    </div>
  );
};

export default Login