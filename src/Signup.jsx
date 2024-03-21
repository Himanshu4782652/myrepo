import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App_signup.css";

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email format validation
    const emailRegex = /^.+@gmail.com/;
    if (!emailRegex.test(email)) {
      alert(
        "Please enter a valid email format (lowercase letters and numbers followed by @gmail.com)"
      );
      return;
    }

    // Password complexity validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W)\w{8,16}$/;

    if (!passwordRegex.test(pass)) {
      alert(
        "Password must be at least 8 characters and include at least 1 number, 1 lowercase letter, 1 uppercase letter, and 1 special character."
      );
      return;
    }

    console.log("Email:", email, "Password:", pass);
  };

  const handleForgotPassword = () => {
    //props.onForgotPassword(); 
    console.log("request sent for forget password")
  };

  return (
    <div className="auth-form-container1">
      <h2 className="h1">SignIn</h2>
      <form className="Signin-form1" onSubmit={handleSubmit}>
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
        <button type="submit">SignIn</button>
      </form>
      <Link to="/login">
      <button className="link-btn1">
      Already have an account? SignUp here
      </button>
      </Link>
      <Link to="/forgot/password">
      <button className="link-btn" onClick={handleForgotPassword}>
      Forgot Password?
      </button>
      </Link>
    </div>
  );
};
