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
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 5;

  // VITE CONFIG
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  const { token } = useSelector((state) => state.auth);
  const userRole = useSelector((state) => state.auth.user?.role);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}header/list`);
      const sorted = res.data.headers.sort((a, b) =>
        a.linkText.localeCompare(b.linkText)
      );

      setMenuItems(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const formData = new FormData();
      Object.keys(newItem).forEach((key) =>
        formData.append(key, newItem[key])
      );

      await axios.post(`${API_BASE_URL}header`, formData, {
        ...config,
        headers: { ...config.headers, "Content-Type": "multipart/form-data" },
      });

      fetchMenuItems();
      setShowModal(false);
      toast.success("Menu item added successfully!");
    } catch (error) {
      toast.error("Error adding menu");
      console.error(error);
    }
  };

  const handleEditItem = async () => {
    try {
      const formData = new FormData();
      Object.keys(currentItem).forEach((key) =>
        formData.append(key, currentItem[key])
      );

      await axios.put(
        `${API_BASE_URL}header/${currentItem._id}`,
        formData,
        {
          ...config,
          headers: { ...config.headers, "Content-Type": "multipart/form-data" },
        }
      );

      fetchMenuItems();
      setShowModal(false);
      toast.success("Menu updated successfully!");
    } catch (error) {
      toast.error("Error updating item");
      console.error(error);
    }
  };

  const handleDeleteItem = async (id) => {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await axios.delete(`${API_BASE_URL}header/${id}`, config);
      fetchMenuItems();
      toast.success("Menu deleted successfully!");
    } catch (error) {
      toast.error("Delete failed");
      console.error(error);
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

    if (currentItem._id) handleEditItem();
    else handleAddItem(currentItem);
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
          <Button variant="primary" className="w-100" onClick={() => handleShowModal()}>
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

      <Table striped bordered hover responsive>
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
            <tr key={item._id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{item.linkText}</td>
              <td>{item.parentTab}</td>
              <td>{item.linkUrl}</td>

              <td>
                {item.image && (
                  <img
                    src={`${IMAGE_BASE_URL}${item.image}`}
                    alt="thumb"
                    style={{ width: "50px" }}
                  />
                )}
              </td>
{console.log(`${IMAGE_BASE_URL}${item.image}`)}
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

      {/* PAGINATION */}
      <Pagination className="mt-3">
        <Pagination.First
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        />
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />

        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        />
      </Pagination>

      {/* MODAL */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentItem._id ? "Edit Item" : "Add Item"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>

            <Form.Group>
              <Form.Label>Parent Menu</Form.Label>
              <Form.Select
                name="parentTab"
                value={currentItem.parentTab || ""}
                onChange={handleChange}
              >
                <option value="">Select Parent</option>
                {menuItems.map((item) => (
                  <option key={item._id} value={item.linkText}>
                    {item.linkText}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Menu Text</Form.Label>
              <Form.Control
                type="text"
                name="linkText"
                value={currentItem.linkText || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Short Title</Form.Label>
              <Form.Control
                type="text"
                name="shorttitle"
                value={currentItem.shorttitle || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Menu URL</Form.Label>
              <Form.Control
                type="text"
                name="linkUrl"
                value={currentItem.linkUrl || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <ReactQuill
                value={currentItem.description || ""}
                onChange={(value) =>
                  setCurrentItem({ ...currentItem, description: value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Banner Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="number"
                name="orderNumber"
                value={currentItem.orderNumber || ""}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                name="megaMenu"
                label="Mega Menu"
                checked={currentItem.megaMenu || false}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-2">
              {currentItem._id ? "Save Changes" : "Create Menu"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MenuManagement;
