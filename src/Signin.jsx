import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App_signin.css";

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", pass);
  };

  const handleForgotPassword = () => {
    //props.onForgotPassword(); 
    console.log("request sent for forget password")
  };

  return (
    <div className="auth-form-container">
      <h2 className="h">SignUp</h2>
      <form className="Signin-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          placeholder="full name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">SignUp</button>
      </form>
      <Link to="/signup" >
      <button className="link-btn">
      Already have an account? SignIn here
      </button>
      </Link>
    </div>
  );
};
