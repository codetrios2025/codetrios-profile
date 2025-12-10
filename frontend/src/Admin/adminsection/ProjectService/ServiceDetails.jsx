import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { getItem } from '../../../services/routes.backend.services';
import constants from '../../../services/constants';
import ReactQuill from 'react-quill-new';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from 'react-redux';

const ServiceDetails = () => {
  const { control, register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      fields: [{ title: '', link: '', description: '', iconfield: '', order: '', image: null }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });
    const { token } = useSelector((state) => state.auth);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
      },
    };
    const userRole = useSelector((state) => state.auth.user?.role);

  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const [serviceHeading, setServiceHeading] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [serviceFields, setFields] = useState(items.fields);
  const [serviceDetailId, setServiceDetailId] = useState(null);
  const [mainTitleImage, setMainTitleImage] = useState(null);
  const [serviceMains, setServiceMains] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState(''); // Add state for search term


  useEffect(() => {
    fetchData();
    fetchServices();
  }, []);
const fetchServices = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}homeservices`);
      setServiceMains(response.data.homeservice);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await getItem('servicedetails');
      setItems(response.data.servicedetails);
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
    reset({ fields: [{ title: '', link: '', description: '', iconfield: '', order: '', image: null }] });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('titlename', selectedValue); // Use the selected dropdown value
    formData.append('description', data.description);
    formData.append('link', data.link);
    if (mainTitleImage) {
      formData.append('image', mainTitleImage);
    }
    data.fields.forEach((field, index) => {
      formData.append(`fields[${index}][title]`, field.title);
      formData.append(`fields[${index}][link]`, field.link);
      formData.append(`fields[${index}][description]`, field.description);
      formData.append(`fields[${index}][iconfield]`, field.iconfield);
      formData.append(`fields[${index}][order]`, field.order);
      if (field.image && field.image.length > 0) {
        Array.from(field.image).forEach((img, imgIndex) => {
          formData.append(`fields[${index}][image][${imgIndex}]`, img);
        });
      }
    });

    try {
      if (editing) {
        const response = await axios.put(`${constants.API_BASE_URL}servicedetails/${index}`, formData);
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        setItems(updatedItems);
        toast.success("Edited successfully");
        handleClose();
        fetchData();
      } else {
        const response = await axios.post(`${constants.API_BASE_URL}servicedetails`, formData);
        setItems([...items, response.data]);
        toast.success("Added successfully");
        handleClose();
        fetchData();
      }
      window.location.reload();
    } catch (error) {
      console.error('Error saving item:', error);
      toast.error("There was an error !");
    }finally {
      reset({ 
        fields: [{ title: '', link: '', description: '', iconfield: '', order: '', image: null }]
      });
      setSelectedValue('');
      setMainTitleImage(null);
    }
  };

  const handleEdit = (item) => {
    setSelectedValue(item.titlename); // Set the selected service title
    setValue('description', item.description);
    setValue('link', item.link);

    const fieldsWithImages = item.fields.map((field) => ({
      ...field,
      image: field.image ? field.image : null, // Include the image in the fields
    }));

    setValue('fields', fieldsWithImages);
    setIndex(item._id);
    setServiceDetailId(item._id);
    setEditing(true);
    handleShow();
  };

  const handleDelete = async (data) => {
    try {
      await axios.delete(`${constants.API_BASE_URL}servicedetails/${data._id}`);
      const filteredItems = items.filter((item) => item._id !== data._id);
      toast.success("Added successfully");
      setItems(filteredItems);
      fetchData();
    } catch (error) {
      fetchData();
      console.error('Error deleting item:', error);
      toast.error("There was an error !");
    }
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setSelectedValue(selectedService);
    // Update the link based on the selected service
    const selectedServiceObj = serviceHeading.find((service) => service.text === selectedService);
    if (selectedServiceObj) {
      setValue('link', selectedServiceObj.link); // Update link input based on the selected service
    }
  };

  const handleDeleteImage = async (fieldIndex, imageIndex) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
    try {
      const url = `${constants.API_BASE_URL}servicedetails/fieldImage/${serviceDetailId}/fields/${fieldIndex}/image/${imageIndex}`;

      const response = await fetch(url, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        const updatedFields = fields.map((field, idx) => {
          if (idx === fieldIndex) {
            return {
              ...field,
              image: field.image.filter((_, imgIdx) => imgIdx !== imageIndex),
            };
          }
          return field;
        });
        setFields(updatedFields);
      } else {
        console.log('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }
  };


  const handleRemovefield = async (serviceID,fieldID,indx) => {
    console.log(serviceID,'======',fieldID)
    try {
      const response = await axios.delete( `${constants.API_BASE_URL}servicedetails/service/${serviceID}/field/${fieldID}`);
      //console.log(response);
      
      if (response) {
        // Successfully removed field
        //console.log(response.data.message);
        toast.success(response.data.message);
        remove(indx)
        const responseItem = await getItem('servicedetails');
        setItems(responseItem.data.servicedetails);
        // Optionally, update the UI or fetch the updated service details here
      }
    } catch (error) {
      console.error('Error removing field:', error.response ? error.response.data.message : error.message);
    }
  }
  // New function to filter and sort items
  const getFilteredAndSortedItems = () => {
    const filteredItems = items.filter(item =>
      item.titlename.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort alphabetically by title
    return filteredItems.sort((a, b) => a.titlename.localeCompare(b.titlename));
  };
  const paginateItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  // const totalPages = Math.ceil(items.length / itemsPerPage);
const totalPages = Math.ceil(getFilteredAndSortedItems().length / itemsPerPage);

  return (
    <Container >
             <ToastContainer />
      <Row className="my-4">
        <Col md={6}>
          <Button onClick={handleShow}>Add Project Service details</Button>
        </Col>
                <Col md={6}>
        <Form.Control
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Page Title</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginateItems(getFilteredAndSortedItems()).map((item, idx) => (
                <tr key={idx}>
                  <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td>{item.titlename}</td>
                  <td>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </a>
                  </td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(item)}>
                    <FaEdit />
                    </Button>{' '}
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
          <Pagination>
            {Array.from({ length: totalPages }, (_, idx) => (
              <Pagination.Item key={idx} active={idx + 1 === currentPage} onClick={() => setCurrentPage(idx + 1)}>
                {idx + 1}
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
              <Form.Select aria-label="Select Service" value={selectedValue} onChange={handleServiceChange}  disabled={!!editing}>
                <option value="">Select a service</option>
                 {serviceMains.map((service) => (
                  <option key={service._id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                {serviceHeading.map((service) => (
                  <option key={service._id} value={service.text}>
                    {service.text}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" {...register('link')} placeholder="Enter link"  disabled={!!editing} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => <ReactQuill {...field} />}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => setMainTitleImage(e.target.files[0])} />
            </Form.Group>
            <h4>More Fields</h4>
            {fields.map((field, index) => (
              <div key={field.id}>
              <hr className="text-success"/>
               {field.title && <h6 className="text-success">Section : {field.title} </h6>}
                <Form.Group className="mb-3">
                  <Form.Label>Field Title</Form.Label>
                  <Form.Control type="text" {...register(`fields.${index}.title`)} placeholder="Enter title" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Link</Form.Label>
                  <Form.Control type="text" {...register(`fields.${index}.link`)} placeholder="Enter link" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Description</Form.Label>
                  <Controller
                    name={`fields.${index}.description`}
                    control={control}
                    render={({ field }) => <ReactQuill {...field} />}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control type="text" {...register(`fields.${index}.iconfield`)} placeholder="Enter Icon" />
                 
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Order</Form.Label>
                  <Form.Control type="number" {...register(`fields.${index}.order`)} placeholder="Enter order" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Field Image</Form.Label>
                  <Form.Control type="file" {...register(`fields.${index}.image`)} multiple />
                </Form.Group>
               
                {field.image && Array.isArray(field.image) && field.image.map((img, imgIndex) => (
                 <>   
                <img 
                  key={imgIndex}
                  src={img.fileName &&  constants.Image_BASE_URL + img.fileName} 
                  alt={imgIndex} 
                  style={{ width: '100px', marginTop: '10px', marginRight: '5px' }} 
                />
                <Button variant="danger" onClick={() => handleDeleteImage(index, imgIndex)}>Delete</Button>
                </>
                
  ))}
                <Button variant="danger" onClick={() => handleRemovefield(serviceDetailId,field._id,index)}>
                  Remove Field
                </Button>
              </div>
            ))}
            <Button variant="primary" onClick={() => append({ title: '', link: '', description: '', iconfield: '', order: '', image: null })}>
              Add Field
            </Button>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ServiceDetails;
