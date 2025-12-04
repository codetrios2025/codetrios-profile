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

const MissionVissionSection = () => {
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
    link: "",
    backgroundimage: "",
    icon: "",
  });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}mission`);
      setItems(response.data.mission);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //console.log(items)
  const handleClose = () => {
    setShow(false);
    setCurrentItem({
      title: "",
      description: "",
      link: "",
      order: "",
      backgroundimage: "",
      icon: "",
    });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", currentItem.title);
    formData.append("link", currentItem.link);
    formData.append("description", currentItem.description);
    formData.append("order", currentItem.order);
    if (e.target.backgroundimage.files[0]) {
      formData.append("backgroundimage", e.target.backgroundimage.files[0]);
    }
    if (e.target.icon.files[0]) {
      formData.append("icon", e.target.icon.files[0]);
    }
    console.log("Form Data:", formData);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    try {
      if (editing) {
        const response = await axios.put(
          `${constants.API_BASE_URL}mission/${currentItem._id}`,
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
          `${constants.API_BASE_URL}mission`,
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
          `${constants.API_BASE_URL}mission/${data._id}`,
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
    setCurrentItem({ ...currentItem, backgroundimage: e.target.files[0] });
  };

  const handleIconChange = (e) => {
    setCurrentItem({ ...currentItem, icon: e.target.files[0] });
  };
  const handleQuillChange = (value) => {
    setCurrentItem({ ...currentItem, description: value });
  };
  return (
    <Container>
      <ToastContainer />
      <Row className="my-4">
        <Col>
          <Button onClick={handleShow}>Add Mission</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Order</th>
                <th>link</th>
                <th>Background Image</th>
                <th>Icon Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.order}</td>
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
                      src={`${constants.Image_BASE_URL}${item.backgroundimage}`}
                      alt=""
                      width="50"
                    />
                  </td>
                  <td>
                    <img
                      src={`${constants.Image_BASE_URL}${item.icon}`}
                      alt=""
                      width="30"
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
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                value={currentItem.link}
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
              <Form.Label>Background Image</Form.Label>
              <Form.Control
                type="file"
                name="backgroundimage"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Icon</Form.Label>
              <Form.Control
                type="file"
                name="icon"
                onChange={handleIconChange}
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

export default MissionVissionSection;
