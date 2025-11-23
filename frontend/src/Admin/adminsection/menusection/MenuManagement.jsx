import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Form,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Pagination,
} from "react-bootstrap";
import Style from "../../adminstyle/FormStyle.module.css";
import constants from "../../../services/constants";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const itemsPerPage = 5;
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}header/list`);
      const sortedItems = response.data.headers.sort((a, b) =>
        a.linkText.localeCompare(b.linkText)
      );
      setMenuItems(sortedItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const formData = new FormData();
      Object.keys(newItem).forEach((key) => {
        formData.append(key, newItem[key]);
      });

      const response = await axios.post(
        `${constants.API_BASE_URL}header`,
        formData,
        config,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchMenuItems();
      setMenuItems([...menuItems, response.data]);
      setShowModal(false);
      toast.success("Menu item added successfully");
    } catch (error) {
      console.error("Error adding new item:", error);
      toast.error("Error adding new item");
    }
  };

  const handleEditItem = async () => {
    try {
      const formData = new FormData();
      Object.keys(currentItem).forEach((key) => {
        formData.append(key, currentItem[key]);
      });

      const response = await axios.put(
        `${constants.API_BASE_URL}header/${currentItem._id}`,
        formData,
        config,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const updatedItems = menuItems.map((item) =>
        item._id === currentItem._id ? response.data : item
      );
      setMenuItems(updatedItems);
      setShowModal(false);
      toast.success("Menu item Update successfully");

      fetchMenuItems();
    } catch (error) {
      console.error("Error editing item:", error);
      toast.error("There was an error submitting the form!");
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}header/${id}`, config);
        setMenuItems(menuItems.filter((item) => item._id !== id));
        fetchMenuItems();
        toast.success("Menu item Deleted successfully");
      } catch (error) {
        console.error("Error deleting item:", error);
        toast.error("Error deleteing Item");
      }
    }
  };

  const handleShowModal = (item = {}) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCurrentItem({});
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentItem._id) {
      handleEditItem();
    } else {
      handleAddItem(currentItem);
    }
  };

  const handleImageChange = (e) => {
    setCurrentItem({ ...currentItem, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentItem({
      ...currentItem,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleQuillChange = (value) => {
    setCurrentItem({ ...currentItem, description: value });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter items based on search query
  const filteredItems = menuItems.filter((item) =>
    item.linkText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <Container>
      <ToastContainer />

      <Row className="mb-3">
        <Col md={6}>
          <Button variant="primary" onClick={() => handleShowModal()} block>
            Add Menu Title
          </Button>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Table striped bordered hover responsive className="w-100 mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Parent Title</th>
            <th>Link</th>
            <th>Banner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{item.linkText}</td>
              <td>{item.parentTab && <span>{item.parentTab}</span>}</td>
              <td>{item.linkUrl}</td>

              <td>
                {" "}
                {item.image && (
                  <img
                    src={`${constants.Image_BASE_URL}${item.image}`}
                    alt={item.linkText}
                    style={{ width: "50px" }}
                  />
                )}
              </td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleShowModal(item)}
                >
                  <FaEdit />
                </Button>{" "}
                {userRole === "user" && (
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteItem(item._id)}
                >
                  <FaTrash />
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="mt-3">
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentItem._id ? "Edit Item" : "Add Item"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="parent-tab">
              <Form.Label>Parent Menu Text:</Form.Label>
              <Form.Control
                as="select"
                name="parentTab"
                value={currentItem.parentTab || ""}
                onChange={handleChange}
                className={Style.Selectdropdown}
              >
                <option value="">Select Parent Tab</option>
                {menuItems.map((item, index) => (
                  <option key={index} value={item.linkText}>
                    {item.linkText}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="link-text">
              <Form.Label>Menu Text:</Form.Label>
              <Form.Control
                type="text"
                name="linkText"
                value={currentItem.linkText || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="link-text">
              <Form.Label>Short Menu Text:</Form.Label>
              <Form.Control
                type="text"
                name="shorttitle"
                value={currentItem.shorttitle || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="link-url">
              <Form.Label>Menu URL:</Form.Label>
              <Form.Control
                type="text"
                name="linkUrl"
                value={currentItem.linkUrl || ""}
                onChange={handleChange}
                placeholder="https://example.com"
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <ReactQuill
                name="description"
                value={currentItem.description || ""}
                onChange={handleQuillChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Banner Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Form.Group controlId="order-number">
              <Form.Label>Order Number:</Form.Label>
              <Form.Control
                type="text"
                name="orderNumber"
                value={currentItem.orderNumber || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="mega-menu">
              <Form.Check
                type="checkbox"
                label="Mega Menu"
                name="megaMenu"
                checked={currentItem.megaMenu || false}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              {currentItem._id ? "Save Changes" : "Create Menu"}
            </Button>
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              className="ml-2"
            >
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MenuManagement;
