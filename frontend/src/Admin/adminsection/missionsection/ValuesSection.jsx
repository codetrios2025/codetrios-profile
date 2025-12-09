import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
  Pagination,
} from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import constants from "../../../services/constants";
import ReactQuill from "react-quill-new";
import { getItem } from "../../../services/routes.backend.services";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ValuesSection = () => {
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
    valueType: "",
    order: "",
    link: "",
    image: "",
  });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this value to set the number of items per page
  const valueTypes = ["Mission", "Tata"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getItem("values");
      setItems(response.data.values);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setCurrentItem({
      title: "",
      description: "",
      link: "",
      order: "",
      image: "",
      valueType: "",
    });
    setShow(false);
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", currentItem.title);
    formData.append("link", currentItem.link);
    formData.append("valueType", currentItem.valueType);
    formData.append("description", currentItem.description);
    formData.append("order", currentItem.order);

    if (e.target.image.files[0]) {
      formData.append("image", e.target.image.files[0]);
    }

    try {
      if (editing) {
        const response = await axios.put(
          `${constants.API_BASE_URL}values/${currentItem._id}`,
          formData,
          config
        );
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        setItems(updatedItems);
        toast.success("Edited successfully");
        fetchData();
        handleClose();
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}values`,
          formData,
          config
        );
        setItems([...items, response.data]);
        toast.success("Added successfully");
        fetchData();
        handleClose();
      }
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
          `${constants.API_BASE_URL}values/${data._id}`,
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
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleImageChange = (e) => {
    setCurrentItem({ ...currentItem, image: e.target.files[0] });
  };

  const handleQuillChange = (value) => {
    setCurrentItem({ ...currentItem, description: value });
  };

  // Calculate the items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate pagination items
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <ToastContainer />
      <Row className="my-4">
        <Col>
          <Button onClick={handleShow}>Add Values</Button>
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
                <th>Value Type</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{indexOfFirstItem + idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.order}</td>
                  <td>{item.valueType}</td>
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
                      {" "}
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

      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => paginate(number)}
            active={number === currentPage}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>

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
            <Form.Group>
              <Form.Label>Values Type</Form.Label>
              <Form.Control
                as="select"
                name="valueType"
                value={currentItem.valueType}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                {valueTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Control>
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
                name="description"
                value={currentItem.description || ""}
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

export default ValuesSection;
