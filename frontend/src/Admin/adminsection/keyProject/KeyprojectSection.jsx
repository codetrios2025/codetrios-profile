import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import constants from '../../../services/constants';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const KeyprojectSection = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Pagination: current page
  const [itemsPerPage] = useState(5); // Pagination: items per page
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({ title: '', description: '', order: '', link: '', image: '' });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
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
      const response = await axios.get(`${constants.API_BASE_URL}keyproject`);
      setItems(response.data.keyproject);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setCurrentItem({ title: '', description: '', link: '', order: '', image: '' });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', currentItem.title);
    formData.append('link', currentItem.link);
    formData.append('description', currentItem.description);
    formData.append('order', currentItem.order);
    if (e.target.image.files[0]) {
      formData.append('image', e.target.image.files[0]);
    }
    if (e.target.innerimage.files[0]) {
      formData.append('innerimage', e.target.innerimage.files[0]);
    }
    try {
      if (editing) {
        const response = await axios.put(`${constants.API_BASE_URL}keyproject/${currentItem._id}`, formData,config);
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        toast.success("Edited successfully");

        setItems(updatedItems);
        fetchData();
      } else {
        const response = await axios.post(`${constants.API_BASE_URL}keyproject`, formData,config);
        setItems([...items, response.data]);
        toast.success("Added successfully");

        fetchData();
      }
      handleClose();
    } catch (error) {
      console.error('Error saving item:', error);
      toast.error("Error !");
    }
  };

  const handleEdit = (idx) => {
    setCurrentItem({
      ...idx,
     image: idx.image ? `${constants.Image_BASE_URL}/${idx.image}` : '',
    innerimage: idx.innerimage ? `${constants.API_BASE_URL}/${idx.innerimage}` : ''
    });
    setCurrentItem(idx);
    setIndex(idx);
    setEditing(true);
    handleShow();
  };

  const handleDelete = async (data) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
    try {
      await axios.delete(`${constants.API_BASE_URL}keyproject/${data._id}`,config);
      const filteredItems = items.filter((item, index) => index !== data._id);
      setItems(filteredItems);
      toast.success("Deleted successfully");
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error("Error deleting Item");
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

  const handleInnerImageChange = (e) => {
    setCurrentItem({ ...currentItem, innerimage: e.target.files[0] });
  };

  const handleQuillChange = (value) => {
    setCurrentItem({ ...currentItem, description: value });
  };

  // Pagination: calculate the current items to display
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter items based on the search term
  const filteredItems = items
  .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())) // Filter by title
  .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically


  // Pagination: calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  return (
    <Container>
      <ToastContainer />
      <Row className="my-4">
        <Col md={6}>
          <Button onClick={handleShow}>Add Key project</Button>
        </Col>
        <Col md={6}> <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 mb-3"
          /></Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Order</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{indexOfFirstItem + idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.order}</td>
                  <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(item)}><FaEdit /></Button>
                    {' '}
                    {userRole === "user" && (
                    <Button variant="danger" onClick={() => handleDelete(item)}><FaTrash /></Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <Pagination>
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
              <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Edit Item' : 'Add Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={currentItem.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" name="link" value={currentItem.link} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <ReactQuill value={currentItem.description} onChange={handleQuillChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order</Form.Label>
              <Form.Control type="number" name="order" value={currentItem.order} onChange={handleChange} />
            </Form.Group>
            {currentItem.image && (
        <div className="mb-3">
          <img src={constants.Image_BASE_URL+""+currentItem.image} alt="Home Page" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        </div>
      )}
            <Form.Group className="mb-3">
              <Form.Label>Home page Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImageChange} />
             
            </Form.Group>
            {currentItem.innerimage && (
        <div className="mb-3">
          <img src={constants.Image_BASE_URL+""+currentItem.innerimage} alt="Inner Page" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        </div>
      )}
            <Form.Group className="mb-3">
              <Form.Label>Inner page Image</Form.Label>
              <Form.Control type="file" name="innerimage" onChange={handleInnerImageChange} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" type="submit">{editing ? 'Update' : 'Save'}</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default KeyprojectSection;
