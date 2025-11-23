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
import constants from "../../../services/constants";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const KeyprojectSection = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    title: "",
    description: "",
    description1: "",
    order: "",
    link: "",
    image1: "",
    image2: "",
    image3: "",
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
      const response = await axios.get(`${constants.API_BASE_URL}about`);
      setItems(response.data.about);
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
      description1: "",
      order: "",
      link: "",
      image1: "",
      image2: "",
      image3: "",
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
    formData.append("description1", currentItem.description1);
    formData.append("order", currentItem.order);
    if (e.target.image1.files[0]) {
      formData.append("image1", e.target.image1.files[0]);
    }
    if (e.target.image2.files[0]) {
      formData.append("image2", e.target.image2.files[0]);
    }
    if (e.target.image3.files[0]) {
      formData.append("image3", e.target.image3.files[0]);
    }
    try {
      if (editing) {
        const response = await axios.put(
          `${constants.API_BASE_URL}about/${currentItem._id}`,
          formData,
          config
        );
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        toast.success("Edited successfully");
        setItems(updatedItems);
        fetchData();
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}about`,
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
          `${constants.API_BASE_URL}about/${data._id}`,
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
    setCurrentItem({ ...currentItem, image1: e.target.files[0] });
  };
  const handleImage2Change = (e) => {
    setCurrentItem({ ...currentItem, image2: e.target.files[0] });
  };
  const handleImage3Change = (e) => {
    setCurrentItem({ ...currentItem, image3: e.target.files[0] });
  };
  const handleQuillChange = (value) => {
    setCurrentItem({ ...currentItem, description: value });
  };
  const handleQuill1Change = (value) => {
    setCurrentItem({ ...currentItem, description1: value });
  };
  return (
    <Container>
      <ToastContainer />
      <Row className="my-4">
        <Col>
          <Button onClick={handleShow}>Add About</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Order</th>
                <th>link</th>

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
                  {/* <td><img src={`${ constants.Image_BASE_URL}${item.image}`} alt="" width="50" /></td> */}
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
              <Form.Label>Main Description</Form.Label>
              {/* <Form.Control as="textarea" rows={3} name="description" value={currentItem.description} onChange={handleChange} /> */}
              <ReactQuill
                value={currentItem.description}
                onChange={handleQuillChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>

              <ReactQuill
                value={currentItem.description1}
                onChange={handleQuill1Change}
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
              <Form.Label>Image 1</Form.Label>
              <Form.Control
                type="file"
                name="image1"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Image 2</Form.Label>
              <Form.Control
                type="file"
                name="image2"
                onChange={handleImage2Change}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Image 3</Form.Label>
              <Form.Control
                type="file"
                name="image3"
                onChange={handleImage3Change}
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
