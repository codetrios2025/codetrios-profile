import React, { useState } from 'react';
import { useNavigate,Link  } from "react-router-dom"; // Use react-router-dom for navigation
import Style from './adminstyle/LoginForm.module.css';
import constants from '../services/constants';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Please enter an email address.');
      return;
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Mock API call
    try {
      // Simulate sending a password reset email
      await fetch(`${ constants.API_BASE_URL}password/forgot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      setMessage('If the email address is associated with an account, a password reset link will be sent.');
      setError('');
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setMessage('');
    }
  };
const Canclehandle =()=>{

}
  return (
    <div className={Style.Loginheader}>
      <div className={Style.loginContainer}>
        <h2>Forget Password</h2>
      {message && <p className={Style.success}>{message}</p>}
      {error && <p className={Style.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={Style.formGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={Style.ButtonStyle} >Send Reset Link</button>
        <Link to="/Login" className={Style.CancleButton}>Cancle</Link>
      </form>
    </div>
    </div>
  );
};

export default ForgetPassword;
