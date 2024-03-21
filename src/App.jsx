
import React, { useState } from 'react';
//import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom' 
import './App.css';
import { Signin } from './Signin.jsx';
import { Signup } from './Signup.jsx';
import {ForgetPassword} from "./ForgetPassword.jsx"

function App() {
  const [currentForm, setCurrentForm] = useState('Signup'); 

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    // <div className="App">
    //   {
    //     currentForm === 'Signup' ? <Signup onFormSwitch = {toggleForm} /> : <Signin onFormSwitch = {toggleForm}/>
        
    //   }
    // </div>
    <Routes>
      <Route path="/signup" element={<Signup /> } />
      <Route path="/login" element={ <Signin />} />
      <Route path="/forgot/password" element={<ForgetPassword />} />
      </Routes>

    
  );
}

export default App;
