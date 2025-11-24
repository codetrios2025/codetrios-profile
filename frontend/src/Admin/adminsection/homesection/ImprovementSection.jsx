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
import { getItem } from "../../../services/routes.backend.services";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ImprovementSection = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    title: "",
    description: "",
    order: "",
    image: "",
  });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getItem("improvement");
      setItems(response.data.improvments);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //console.log(items)
  const handleClose = () => {
    setShow(false);
    setCurrentItem({ title: "", description: "", order: "", image: "" });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", currentItem.title);
    formData.append("description", currentItem.description);
    formData.append("order", currentItem.order);
    if (e.target.image.files[0]) {
      formData.append("image", e.target.image.files[0]);
    }

    try {
      if (editing) {
        const response = await axios.put(
          `${constants.API_BASE_URL}improvement/${currentItem._id}`,
          formData,
          config
        );
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        setItems(updatedItems);
        toast.success("Edited successfully");
        fetchData();
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}improvement`,
          formData,
          config
        );
        setItems([...items, response.data]);
        toast.success("Added successfully");
        fetchData();
      }
      handleClose();
    } catch (error) {
      console.error("Error saving item:", error);
      toast.error("There was an error !");
    }
  };

  const handleEdit = (idx) => {
    setCurrentItem(idx);
    setIndex(idx);
    setEditing(true);
    handleShow();
  };

  const handleDelete = async (data) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${constants.API_BASE_URL}improvement/${data._id}`,
          config
        );
        const filteredItems = items.filter((item, index) => index !== data._id);
        setItems(filteredItems);
        toast.success("Deleted successfully");
        fetchData();
      } catch (error) {
        console.error("Error deleting item:", error);
        toast.error("There was an error !");
      }
    }
  };

  const handleChange = (e) => {
    // console.log( e.target)
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleImageChange = (e) => {
    setCurrentItem({ ...currentItem, image: e.target.files[0] });
  };

  return (
    <Container>
      <ToastContainer />
      <Row className="my-4">
        <Col>
          <Button onClick={handleShow}>Add Improvment text details</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Order</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </td>
                  <td>
                    <img
                      src={`${constants.Image_BASE_URL}${item.image}`}
                      alt=""
                      width="50"
                    />
                  </td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(item)}>
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
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={currentItem.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order</Form.Label>
              <Form.Control
                type="number"
                name="order"
                value={currentItem.order}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
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

export default ImprovementSection;
