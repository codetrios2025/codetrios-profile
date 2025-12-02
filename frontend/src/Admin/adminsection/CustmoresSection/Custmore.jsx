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
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; // Import Quill CSS
import "../../adminstyle/Style.module.css";
import parse from "html-react-parser";
import axios from "axios";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Custmores = () => {
  const [customersMembers, setCustomersMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    pageType: "",
    order: "",
    description: "",
    image: "",
    link: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  const pageTypes = [
    "Assurance",
    "Project",
    "Certification",
    "Custmor",
    "Ayush",
    "UAS",
    "INDGAP",
    "VCSMPP",
    "QMS",
    "Project-real-estate",
    "Project-institutional",
    "Project-industrial",
  ];

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}customers`);
      setCustomersMembers(response.data.customers);
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
    const file = e.target.files[0];
    if (file) {
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        "application/vnd.ms-excel", // .xls
      ];

      if (validTypes.includes(file.type)) {
        setNewMember({ ...newMember, image: file });
        // Optional: Set the file name to display or use elsewhere
        // setFileName(file.name);
      } else {
        toast.error("Please upload a valid Excel file (.xlsx or .xls).");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("pageType", newMember.pageType);
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
          `${constants.API_BASE_URL}customers/${editIndex._id}`,
          formData,
          config
        );
        const updatedMembers = customersMembers.map((member, index) =>
          index === editIndex ? newMember : member
        );
        setCustomersMembers(updatedMembers);
        setEditIndex(null);
        toast.success("Update successfully");
      } else {
        // Add new member
        const response = await axios.post(
          `${constants.API_BASE_URL}customers`,
          formData,
          config
        );
        setCustomersMembers([...customersMembers, response.data]);
        toast.success("Added successfully");
      }
      fetchLinks();
      setNewMember({
        name: "",
        pageType: "",
        order: "",
        description: "",
        image: "",
        link: "",
      });
      handleClose();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error submitting the form!");
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
          `${constants.API_BASE_URL}customers/${index._id}`,
          config
        );
        const filteredItems = customersMembers.filter(
          (item, idx) => idx !== index
        );
        setCustomersMembers(filteredItems);
        toast.success("Deleted successfully");
        fetchLinks();
      } catch (error) {
        toast.error("Error deleteing Item");
        console.error("There was an error deleting the member!", error);
      }
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = customersMembers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col>
          <Button variant="primary" onClick={handleShow}>
            Add Custmor
          </Button>
          <Row>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Page Type</th>
                  {/* <th>Order</th> */}
                  <th>Excel file</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.map((member, index) => (
                  <tr key={member._id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{member.name}</td>
                    <td>{member.pageType}</td>
                    {/* <td>{parse(`${member.description}`)}</td> */}
                    {/* <td>{member.order}</td> */}
                    <td>
                      {member.image && (
                        <a
                          href={`${constants.Image_BASE_URL}${member.image}`}
                          download
                        >
                          Download Excel
                        </a>
                      )}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(member)}
                      >
                        <FaEdit />
                      </Button>
                      {userRole === "user" && (
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(member)}
                        className="ml-2"
                      >
                        <FaTrash />
                      </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          <Pagination className="mt-3">
            {[
              ...Array(
                Math.ceil(customersMembers.length / itemsPerPage)
              ).keys(),
            ].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Custmore" : "Add Custmore"}
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
              <Form.Label>Page Type</Form.Label>
              <Form.Control
                as="select"
                name="pageType"
                value={newMember.pageType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                {pageTypes.map((type, index) => (
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
                accept=".xlsx , .xls"
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
              {editIndex !== null ? "Update Custmore" : "Add Custmore"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Custmores;
