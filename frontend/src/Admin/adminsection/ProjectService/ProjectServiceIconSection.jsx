import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { getItem } from '../../../services/routes.backend.services';
import constants from '../../../services/constants';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import { useForm, useFieldArray } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const ProjectServiceIconSection = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({ title: '', link: '', fields: [] });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const [serviceHeading, setServiceHeading] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { register, handleSubmit, setValue, getValues, control, watch } = useForm({
    defaultValues: {
      link: '',
      fields: []
    }
  });
    const { token } = useSelector((state) => state.auth);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
      },
    };
    const userRole = useSelector((state) => state.auth.user?.role);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields'
  });
  const [previewIcons, setPreviewIcons] = useState({});

  useEffect(() => {
    if (editing) {
      const previewData = {};
      currentItem.fields.forEach(field => {
        if (field.icon) {
          previewData[field.title] = `${constants.Image_BASE_URL}${field.icon}`;
        }
      });
      setPreviewIcons(previewData);
    }
  }, [currentItem, editing]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getItem('iconservices');
      setItems(response.data.iconservice);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      const response = await getItem('homeservicesimage');
      setServiceHeading(response.data.homeserviceimage);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setCurrentItem({ title: '', link: '', fields: [] });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setSelectedValue(selectedService);
    const selectedServiceObj = serviceHeading.find(service => service.text === selectedService);
    if (selectedServiceObj) {
      setValue('link', selectedServiceObj.link); 
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', selectedValue);
    formData.append('link', data.link);

    data.fields.forEach((field, index) => {
      formData.append(`fields[${index}][title]`, field.title);
      formData.append(`fields[${index}][order]`, field.order);
      formData.append(`fields[${index}][description]`, field.description);

      if (field.icon && field.icon[0]) {
        formData.append(`fields[${index}][icon]`, field.icon[0]);
      }
    });

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      if (editing) {
        const response = await axios.put(`${constants.API_BASE_URL}iconservices/${currentItem._id}`, formData, config);
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        toast.success("Edited successfully");
        setItems(updatedItems);
        handleClose();
        fetchData();
      } else {
        const response = await axios.post(`${constants.API_BASE_URL}iconservices`, formData, config);
        setItems([...items, response.data]);
        toast.success("Added successfully");
        handleClose();
        fetchData();
      }
      handleClose();
    } catch (error) {
      console.error('Error saving item:', error);
      toast.error("There was an error !");
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setIndex(items.findIndex(i => i._id === item._id));
    setEditing(true);
    setSelectedValue(item.title)
    setValue('link', item.link); 
    setValue('fields', item.fields); 
    handleShow();
  };

  const handleDelete = async (item) => {
    try {
      await axios.delete(`${constants.API_BASE_URL}iconservices/${item._id}`);
      setItems(items.filter(i => i._id !== item._id));
      toast.success("Deleted successfully");
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error("There was an error !");
    }
  };

  const handleAddField = () => {
    append({ title: '', order: '', description: '', icon: '' });
  };

  const handleRemovefield = async (serviceID,fieldID,indx) => {
    console.log(serviceID,'======',fieldID)
    try {
      const response = await axios.delete( `${constants.API_BASE_URL}iconservices/iconservice/${serviceID}/field/${fieldID}`);
      //console.log(response);
      
      if (response) {
        // Successfully removed field
        //console.log(response.data.message);
        toast.success(response.data.message);
        remove(indx)
        // const responseItem = await getItem('servicedetails');
        // setItems(responseItem.data.servicedetails);
        // Optionally, update the UI or fetch the updated service details here
      }
    } catch (error) {
      console.error('Error removing field:', error.response ? error.response.data.message : error.message);
    }
  }

  
 // Filter items based on search term
 const filteredItems = items.filter(item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container >
             <ToastContainer />
      <Row className="my-4">
        <Col md={6}>
          <Button onClick={handleShow}>Add Keys For Services</Button>
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
                <th>Page Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((item, idx) => (
                <tr key={item._id}>
                  <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(item)}><FaEdit /></Button>{' '}
                    {userRole === "user" && (
                    <Button variant="danger" onClick={() => handleDelete(item)}><FaTrash /></Button>
                  )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {[...Array(pageCount).keys()].map(pageNumber => (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber + 1 === currentPage}
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                {pageNumber + 1}
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Select
                aria-label="Select Service"
                value={selectedValue}
                onChange={handleServiceChange}
                disabled={!!editing}
              >
                <option value="">Select a service</option>
                <option value="Services">Services</option>
                <option value="Certification">Certification</option>
                {serviceHeading.map(service => (
                  <option key={service._id} value={service.text}>{service.text}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" {...register('link')}  disabled={!!editing}/>
            </Form.Group>

            <hr />
            <h5>Fields</h5>
            {fields.map((field, idx) => (
              <div key={field.id} className="mb-3">
                 <hr className="text-success"/>
                 {field.title && <h6 className="text-success">Section : {field.title} </h6>}
                <Form.Group className="mb-3">
                  <Form.Label>Field Title</Form.Label>
                  <Form.Control
                    type="text"
                    {...register(`fields.${idx}.title`)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Description</Form.Label>
                  <ReactQuill
                    value={watch(`fields.${idx}.description`)}
                    onChange={(value) => setValue(`fields.${idx}.description`, value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Order</Form.Label>
                  <Form.Control
                    type="number"
                    {...register(`fields.${idx}.order`)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Icon</Form.Label>
                  {previewIcons[field.title] && (
                    <div>
                      <img src={previewIcons[field.title]} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    </div>
                  )}
                  <Form.Control
                    type="file"
                    {...register(`fields.${idx}.icon`)}
                  />
                </Form.Group>
                <Button variant="danger" onClick={() => handleRemovefield(currentItem._id,field._id,idx)}>
                  Remove Field
                </Button>
                <hr />
              </div>
            ))}
            <Button variant="primary" onClick={handleAddField}>Add Field</Button>
            <Button variant="success" type="submit">
              {editing ? 'Update' : 'Save'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProjectServiceIconSection;
