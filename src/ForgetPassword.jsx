import React, { useState } from "react";
import "./App_forgetpassword.css";

  // ForgotPassword.jsx
export const ForgetPassword = () => {
    const [email, setEmail] = useState("");
  
    const handleForgotPasswordSubmit = (e) => {
      e.preventDefault();
      console.log("Forgot Password for:", email); 
    };
  
    return (
      <div className="forgot-password-container">
        <h2 className="no">Forgot Password</h2>
        <form onSubmit={handleForgotPasswordSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@example.com"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Email</button>
        </form>
      </div>
    );
  };
  