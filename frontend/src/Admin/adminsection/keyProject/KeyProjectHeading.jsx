import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import constants from "../../../services/constants";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; // Import Quill CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const KeyprojectSection = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    title: "",
    description: "",
  });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);

  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}keyheading`);
      setItems(response.data.keyheading);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setCurrentItem({ title: "", description: "" });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", currentItem.title);
    formData.append("description", currentItem.description);

    try {
      if (editing) {
        const response = await axios.put(
          `${constants.API_BASE_URL}keyheading/${currentItem._id}`,
          formData,
          config
        );
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        setItems(updatedItems);
        toast.success("Updated successfully");
        fetchData();
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}keyheading`,
          currentItem,
          config
        );
        setItems([...items, response.data]);
        toast.success("Added successfully");
        fetchData();
      }
      handleClose();
    } catch (error) {
      console.error("Error saving item:", error);
      toast.error("There was an error submitting the form!");
    }
  };

  const handleEdit = (item, idx) => {
    setCurrentItem(item);
    setIndex(idx);
    setEditing(true);
    handleShow();
  };

  const handleDelete = async (item) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${constants.API_BASE_URL}keyheading/${item._id}`,
          config
        );
        const filteredItems = items.filter((i) => i._id !== item._id);
        setItems(filteredItems);
        toast.success("Deleted successfully");
        fetchData();
      } catch (error) {
        console.error("Error deleting item:", error);
        toast.error("Error deleteing Item");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleQuillChange = (value) => {
    setCurrentItem({ ...currentItem, description: value });
  };

  return (
    <Container>
      {" "}
      <ToastContainer />
      <Row className="my-4">
        <Col>
          <Button onClick={handleShow}>Add Key project</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(item, idx)}
                    >
                      <FaEdit />
                    </Button>{" "}
                    {userRole === "user" && (
                    <Button variant="danger" onClick={() => handleDelete(item)}>
                      <FaTrash />
                    </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? "Edit Item" : "Add Item"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentItem.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                value={currentItem.description}
                onChange={handleQuillChange}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                {editing ? "Update" : "Save"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default KeyprojectSection;
