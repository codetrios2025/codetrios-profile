import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Alert, Card } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import constants from "../services/constants";
import axios from "axios";
import Style from "./adminstyle/LoginForm.module.css"; // your existing style file

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
const currentPath = window.location.pathname;
const id = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (pwd) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!_+=-]).{8,}$/.test(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = form;

    if (!password || !confirmPassword) {
      return setError("Both fields are required.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (!validatePassword(password)) {
      return setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
    }

    try {
      await axios.put(`${constants.API_BASE_URL}password/reset/${id}`, {
        password,
        confirmPassword,
      });

      setSuccess("Password reset successfully.");
      setError("");

      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to reset password.");
      setSuccess("");
    }
  };

  return (
     <div className={Style.Loginheader}>
   <div className={Style.loginContainer}>
        <h2>Forget Password</h2>
     {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSubmit} className={Style.formGroup}>
          <Form.Group className="position-relative mb-3">
            <label>New Password</label>
            <Form.Control
              type={showPassword.password ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
              style={{
                position: "absolute",
                right: "10px",
                top: "38px",
                cursor: "pointer",
                color: "#666",
              }}
            >
              {showPassword.password ? <FaEyeSlash /> : <FaEye />}
            </span>
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
            />
            <span
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
              style={{
                position: "absolute",
                right: "10px",
                top: "38px",
                cursor: "pointer",
                color: "#666",
              }}
            >
              {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>
      
    </div>
    </div>
  );
};

export default ResetPassword;
