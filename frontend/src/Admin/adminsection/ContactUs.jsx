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
import { getItem } from "../../services/routes.backend.services";
import constants from "../../services/constants";
import { FaEye, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const blogsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getItem("contactus", config);
      setItems(response.data.contact);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (itemsdata) => {
    setCurrentItem(itemsdata);
    setShow(true);
  };

  const handleDelete = async (data) => {
    try {
      await axios.delete(
        `${constants.API_BASE_URL}contactus/${data._id}`,
        config
      );
      const filteredItems = items.filter((item) => item._id !== data._id);
      setItems(filteredItems);
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error deleting Item");
    }
  };

  // Search functionality
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentContact = filteredItems.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredItems.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <ToastContainer />
      <Row className="my-4">
        <Col md={6}>
          <h4>Contact Queries</h4>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by name, email, or organization..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="mt-3 mb-3"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Organisation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContact.map((item, idx) => (
                <tr key={idx}>
                  <td>{indexOfFirstBlog + idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.email}</td>
                  <td>{item.organization}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleShow(item)}>
                      <FaEye />
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(item)}>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Pagination className="mt-3">
          {totalPages > 1 && (
            <>
              <Pagination.First
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </>
          )}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
          {totalPages > 1 && (
            <>
              <Pagination.Next
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
              />
            </>
          )}
        </Pagination>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Query Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentItem !== null ? (
            <Table>
              <thead>
                <tr>
                  <td>Name:</td>
                  <td>{currentItem.title}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{currentItem.email}</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{currentItem.phoneNumber}</td>
                </tr>
                <tr>
                  <td>City:</td>
                  <td>{currentItem.city}</td>
                </tr>
                <tr>
                  <td>Organisation:</td>
                  <td>{currentItem.organization}</td>
                </tr>
                <tr>
                  <td>Query:</td>
                  <td>{currentItem.query}</td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>{currentItem.message}</td>
                </tr>
              </thead>
            </Table>
          ) : null}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ContactUs;
