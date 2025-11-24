// src/components/RegisterForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Modal, Container, Row, Col, Table, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import constants from '../../../services/constants';
import axios from 'axios';
import "../../adminstyle/Style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash ,FaEye, FaEyeSlash} from "react-icons/fa";

const UserAccess = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
    role: '',
    modules: []
  });
const [showPassword, setShowPassword] = useState({
  oldPassword: false,
  newPassword: false,
  confirmPassword: false,
});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const { token } = useSelector((state) => state.auth);
const userRole = useSelector((state) => state.auth.user?.role);
  const [allUser, setAllUser] = useState([]);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
const [showPasswordModal, setShowPasswordModal] = useState(false);
const [passwordData, setPasswordData] = useState({
  userId: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
});
const [passwordError, setPasswordError] = useState('');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${constants.API_BASE_URL}admin/subusers`, config);
      setAllUser(res.data.user);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else if (e.target.name === 'modules') {
      const selected = Array.from(e.target.selectedOptions, option => option.value);
      setFormData({ ...formData, modules: selected });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      avatar: null,
      role: '',
      modules: []
    });
    setErrors({});
    setIsEditMode(false);
    setEditUserId(null);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name || formData.name.length < 4 || formData.name.length > 30) {
      errors.name = "Name should be between 4 and 30 characters";
    }
    if (!formData.email) {
      errors.email = "Please enter your email";
    }
    if (!isEditMode && (!formData.password || formData.password.length < 8)) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!formData.avatar && !isEditMode) {
      errors.avatar = "Please upload an avatar";
    }
    
    if (formData.modules.length === 0) {
      errors.modules = "Please select at least one module";
    }
    return errors;
  };

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const handleShow = () => {
    resetForm();
    setShow(true);
  };

  const handleDelete = async (id) => {
     if (userRole !== 'user') {
    return alert("Only users Can delete.");
  }
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}admin/delete/${id}`, config);
        setAllUser(prev => prev.filter(user => user._id !== id));
        toast.success("Deleted successfully");
      } catch (error) {
        console.error("Error deleting user", error);
        toast.error("Error deleting user");
      }
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      password: '',
      role: user.role || 'user',
      modules: user.modules || [],
      avatar: null
    });
    setIsEditMode(true);
    setEditUserId(user._id);
    setShow(true);
  };
const handleUpdatepassword=(user)=>{
 setPasswordData({
    userId: user._id,
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  setPasswordError('');
  setShowPasswordModal(true);
}
const handlePasswordChange = async () => {
  const { oldPassword, newPassword, confirmPassword, userId } = passwordData;

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!_+=-])[A-Za-z\d@#$%^&*!_+=-]{8,}$/;

  if (!oldPassword || !newPassword || !confirmPassword) {
    return setPasswordError("All fields are required.");
  }

  if (newPassword !== confirmPassword) {
    return setPasswordError("New password and confirm password do not match.");
  }

  if (!strongPasswordRegex.test(newPassword)) {
    return setPasswordError("Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.");
  }
 if (userRole !== 'user') {
    return setPasswordError("Only users with role 'user' can update password.");
  }
  try {
    await axios.put(`${constants.API_BASE_URL}admin/change-update-password/${userId}`, {
      oldPassword,
      newPassword
    }, config);

    toast.success("Password updated successfully");
    setShowPasswordModal(false);
  } catch (err) {
    setPasswordError(err?.response?.data?.message || "Failed to update password.");
  }
};
const handleToggleStatus = async (user) => {
  try {
    const updatedStatus = !user.isDeleted;

    await axios.put(`${constants.API_BASE_URL}admin/update-status/${user._id}`, {
      isDeleted: updatedStatus
    }, config);

    toast.success(`User marked as ${updatedStatus ? "Inactive" : "Active"}`);
    fetchUsers();
  } catch (error) {
    toast.error("Failed to update user status");
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setServerError('');
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      if (!isEditMode || (isEditMode && formData.password)) {
        data.append('password', formData.password);
      }
      if (formData.avatar) {
        data.append('avatar', formData.avatar);
      }
      
      data.append('role', formData.role);
      formData.modules.forEach((module) => {
  data.append("modules", module);
});
      

      try {
        if (isEditMode && editUserId) {
          await axios.put(`${constants.API_BASE_URL}admin/update/${editUserId}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });
          toast.success("User updated successfully");
        } else {
          await axios.post(`${constants.API_BASE_URL}register`, data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          toast.success("User added successfully");
        }

        fetchUsers();
        setShow(false);
        resetForm();
      } catch (error) {
        setServerError(error?.response?.data?.message || "Something went wrong.");
      }
    }
  };

  const filteredUsers = allUser.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={handleShow}>
            Add User
          </Button>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 mb-3"
          />
        </Col>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Active/Inactive</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role==='user'? "SuperAdmin" : user.role}</td>
                <td>
                  {user.isDeleted ? (
                  <Button
                    variant="secondary"
                    onClick={() => userRole === "user" ? handleToggleStatus(user) : toast.error("Unauthorized")}
                  >
                    Inactive
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => userRole === "user" ? handleToggleStatus(user) : toast.error("Unauthorized")}
                  >
                    Active
                  </Button>
                )}
                </td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(user)}>
                    <FaEdit />
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(user._id)}>
                    <FaTrash />
                  </Button>
                   <Button variant="info" onClick={() => handleUpdatepassword(user)}>
                    <FaEdit />
                  </Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? "Update User" : "Register User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {serverError && <Alert variant="danger">{serverError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email}  disabled={isEditMode} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
              {!isEditMode && (
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
              )}

           

            <Form.Group controlId="formAvatar">
              <Form.Label>Avatar</Form.Label>
              <Form.Control type="file" name="avatar" onChange={handleChange} isInvalid={!!errors.avatar} />
              <Form.Control.Feedback type="invalid">{errors.avatar}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" name="role" value={formData.role} onChange={handleChange}>
                <option value="subuser">Sub User</option>
                <option value="subadmin">Sub Admin</option>
              </Form.Control>
            </Form.Group>
<Form.Group controlId="formModules">
  <Form.Label>Module Access</Form.Label>
  <div style={{ border: "1px solid #ced4da", borderRadius: "4px", padding: "10px", maxHeight: "200px", overflowY: "scroll" }}>
    {[
      "menu", "home-page", "about-page", "carrer", "services",
      "mission-value", "team-member", "address", "key-projects", "blog-page",
      "policie-page", "custmores", "downloads", "foodDownload",
      "contact", "jobs", "map-locations"
    ].map((mod, i) => (
      <Form.Check
        key={i}
        type="checkbox"
        id={`mod-${mod}`}
        // label={mod.replace(/-/g, ' ')}
        label={mod.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
        value={mod}
        checked={formData.modules.includes(mod)}
        onChange={(e) => {
          const selectedModules = [...formData.modules];
          if (e.target.checked) {
            selectedModules.push(mod);
          } else {
            const index = selectedModules.indexOf(mod);
            if (index > -1) selectedModules.splice(index, 1);
          }
          setFormData({ ...formData, modules: selectedModules });
        }}
      />
    ))}
  </div>
  {errors.modules && <div style={{ color: "red", marginTop: "5px" }}>{errors.modules}</div>}
</Form.Group>


            <Button variant="primary" type="submit" className="mt-3">
              {isEditMode ? "Update" : "Register"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showPasswordModal} onHide={() => setShowPasswordModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Update Password</Modal.Title>
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

    </Container>
  );
};

export default UserAccess;
