import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderStyle from '../../Style/Header.module.css';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { userlogout } from '../../../store/authSlice';
import constants from "../../../services/constants";
import axios from "axios";
import Logo from '../../../assets/images/logo.png';
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Make sure to import these at the top

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [showPassword, setShowPassword] = useState({
  oldPassword: false,
  newPassword: false,
  confirmPassword: false,
});
  const { token, user } = useSelector((state) => state.auth);
  const userRole = user?.role;

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetail');
    dispatch(userlogout());
    navigate('/Login');
  };

  const handlePasswordChange = async () => {
    const { oldPassword, newPassword, confirmPassword } = passwordData;

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!_+=-])[A-Za-z\d@#$%^&*!_+=-]{8,}$/;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return setPasswordError("All fields are required.");
    }

    if (newPassword !== confirmPassword) {
      return setPasswordError("New password and confirm password do not match.");
    }

    if (!strongPasswordRegex.test(newPassword)) {
      return setPasswordError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    }

    try {
      await axios.put(`${constants.API_BASE_URL}admin/change-update-password/${user._id}`, {
        oldPassword,
        newPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success("Password updated successfully");
      setShowPasswordModal(false);
      setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setPasswordError(err?.response?.data?.message || "Failed to update password.");
    }
  };

  return (
    <>
      <header className={HeaderStyle.HeaderMainAdmin}>
        <div className={HeaderStyle.headerFlexAmdin}>
          <div className={HeaderStyle.Logo}>
            <img src={Logo} alt="Logo" width="150" height="60"/>
          </div>
          <div className={HeaderStyle.Logout}>
            {userRole !== "user" && (
              <Button variant="link" onClick={() => setShowPasswordModal(true)}>
                Change Password
              </Button>
            )}
            <Button variant="link" onClick={logout}><RiLogoutBoxRLine /></Button>
          </div>
        </div>
      </header>

      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          <Form>
           
             <Form.Group className="position-relative">
  <Form.Label>Old Password</Form.Label>
  <Form.Control
    type={showPassword.oldPassword ? "text" : "password"}
    value={passwordData.oldPassword}
    onChange={(e) =>
      setPasswordData({ ...passwordData, oldPassword: e.target.value })
    }
  />
  <span
    onClick={() =>
      setShowPassword((prev) => ({
        ...prev,
        oldPassword: !prev.oldPassword,
      }))
    }
    style={{
      position: "absolute",
      right: "10px",
      top: "38px",
      cursor: "pointer",
    }}
  >
    {showPassword.oldPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</Form.Group>

           
              <Form.Group className="position-relative">
  <Form.Label>New Password</Form.Label>
  <Form.Control
    type={showPassword.newPassword ? "text" : "password"}
    value={passwordData.newPassword}
    onChange={(e) =>
      setPasswordData({ ...passwordData, newPassword: e.target.value })
    }
  />
  <span
    onClick={() =>
      setShowPassword((prev) => ({
        ...prev,
        newPassword: !prev.newPassword,
      }))
    }
    style={{
      position: "absolute",
      right: "10px",
      top: "38px",
      cursor: "pointer",
    }}
  >
    {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</Form.Group>

            
            <Form.Group className="position-relative">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control
    type={showPassword.confirmPassword ? "text" : "password"}
    value={passwordData.confirmPassword}
    onChange={(e) =>
      setPasswordData({ ...passwordData, confirmPassword: e.target.value })
    }
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
    }}
  >
    {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</Form.Group>

            <Button className="mt-3" variant="primary" onClick={handlePasswordChange}>
              Update Password
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
