import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Table,
  Pagination,
} from "react-bootstrap";
import ReactQuill from "react-quill-new";
import { FaEdit, FaTrash } from "react-icons/fa";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import "../../adminstyle/Style.module.css";
import parse from "html-react-parser";
import axios from "axios";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const LeadershipTeam = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  const [teamMembers, setTeamMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    positionType: "",
    order: "",
    description: "",
    image: "",
    link: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const positionTypes = ["Head", "Senior", "Staff"];

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}team`);
      setTeamMembers(response.data.teams);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewMember({
      ...newMember,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("position", newMember.position);
    formData.append("positionType", newMember.positionType);
    formData.append("order", newMember.order);
    formData.append("description", newMember.description);
    formData.append("link", newMember.link);

    if (e.target.image.files[0]) {
      formData.append("image", e.target.image.files[0]);
    }

    try {
      if (editIndex !== null) {
        // Update member
        await axios.put(
          `${constants.API_BASE_URL}team/${editIndex._id}`,
          formData,
          config
        );
        const updatedMembers = teamMembers.map((member, index) =>
          index === editIndex ? newMember : member
        );
        setTeamMembers(updatedMembers);
        toast.success("Edited successfully");
        fetchLinks();
        setEditIndex(null);
      } else {
        // Add new member
        const response = await axios.post(
          `${constants.API_BASE_URL}team`,
          formData,
          config
        );
        setTeamMembers([...teamMembers, response.data]);
        toast.success("Added successfully");
        fetchLinks();
      }

      setNewMember({
        name: "",
        position: "",
        positionType: "",
        order: "",
        description: "",
        image: "",
        link: "",
      });
      handleClose();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error !");
    }
  };

  const handleEdit = (index) => {
    setNewMember(index);
    setEditIndex(index);
    handleShow();
  };

  const handleDelete = async (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${constants.API_BASE_URL}team/${index._id}`,
          config
        );
        const filteredItems = teamMembers.filter((item, idx) => idx !== index);
        setTeamMembers(filteredItems);
        toast.success("Deleted successfully");
        fetchLinks();
      } catch (error) {
        console.error("There was an error deleting the member!", error);
        toast.error("There was an error !");
      }
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentMembers = teamMembers.slice(indexOfFirstItem, indexOfLastItem);
  const filteredMembers = teamMembers
    .filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) // Filter by search term
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

  const currentMembers = filteredMembers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={handleShow}>
            Add Member
          </Button>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 mb-3"
          />
        </Col>
        <Row>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Position</th>
                <th>Position Type</th>
                {/* <th>Description</th> */}
                <th>Order</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentMembers.map((member, index) => (
                <tr key={member._id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.position}</td>
                  <td>{member.positionType}</td>
                  {/* <td>{parse(`${member.description}`)}</td> */}
                  <td>{member.order}</td>
                  <td>
                    {member.image && (
                      <img
                        src={`${constants.Image_BASE_URL}${member.image}`}
                        alt="Member"
                        style={{ width: "50px" }}
                      />
                    )}
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(member)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(member)}
                      className="ml-2"
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Pagination className="mt-3">
          {[...Array(Math.ceil(teamMembers.length / itemsPerPage)).keys()].map(
            (number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Member" : "Add Member"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newMember.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                value={newMember.link}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={newMember.position}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Position Type</Form.Label>
              <Form.Control
                as="select"
                name="positionType"
                value={newMember.positionType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                {positionTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Order</Form.Label>
              <Form.Control
                type="number"
                name="order"
                value={newMember.order}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription" id="formDescription">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                value={newMember.description}
                onChange={(value) =>
                  setNewMember({ ...newMember, description: value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
              />
              {newMember.image && (
                <img
                  src={`${constants.Image_BASE_URL}${newMember.image}`}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{ width: "100px" }}
                />
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              {editIndex !== null ? "Update Member" : "Add Member"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default LeadershipTeam;
