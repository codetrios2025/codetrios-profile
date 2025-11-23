// src/components/RegisterForm.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Style from './adminstyle/LoginForm.module.css';
import constants from '../services/constants'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
    role: 'user'
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Please enter your name";
    } else if (formData.name.length < 4 || formData.name.length > 30) {
      errors.name = "Name should have more than 4 and less than 30 characters";
    }

    if (!formData.email) {
      errors.email = "Please enter your email";
    } 

    if (!formData.password) {
      errors.password = "Please enter your password";
    } else if (formData.password.length < 8) {
      errors.password = "Password should be greater than 8 characters";
    }

    if (!formData.avatar) {
      errors.avatar = "Please upload an avatar";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSuccess(false);
      setServerError('');

      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('avatar', formData.avatar);
      data.append('role', formData.role);

      try {
        const response = await axios.post(`${ constants.API_BASE_URL}register`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setSuccess(true);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setServerError(error.response.data.message);
        } else {
          setServerError('Something went wrong. Please try again later, Or check Your email.');
        }
      }
    }
  };
  if(success ===true){
    navigate('/Login')
  }
  return (
    <div className={Style.Loginheader}>
      <div className={Style.loginContainer}>
      <h2>Register New User</h2>
      {success && <Alert variant="success">Registration successful!</Alert>}
      {serverError && <Alert variant="danger">{serverError}</Alert>}
      <Form onSubmit={handleSubmit}>
     
        <Form.Group controlId="formName">
          <Form.Label className={Style.LabelStyle}>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group controlId="formEmail">
          <Form.Label className={Style.LabelStyle}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group controlId="formPassword">
          <Form.Label className={Style.LabelStyle}>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group controlId="formAvatar">
          <Form.Label className={Style.LabelStyle}>Avatar</Form.Label>
          <Form.Control
            type="file"
            name="avatar"
            onChange={handleChange}
            isInvalid={!!errors.avatar}
          />
          <Form.Control.Feedback type="invalid">
            {errors.avatar}
          </Form.Control.Feedback>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
     
      
      </div>
    </div>
  );
};

export default RegisterForm;
