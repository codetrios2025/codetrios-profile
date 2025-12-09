import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table, Modal, Form ,Pagination} from 'react-bootstrap';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { getItem } from '../../../services/routes.backend.services';
import constants from '../../../services/constants';
import ReactQuill from 'react-quill-new';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const AboutOtherSection = () => {
  const { control, register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      fields: [{ title: '', link: '',subtitle:'', description: '', description2: '', order: '', image: null }],
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
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
   // Pagination state
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getItem('whychooseus');
      setItems(response.data.whychooseus);
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
    reset({ fields: [{ title: '', link: '',subtitle:'', description: '', description2: '', order: '', image: null }] });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('titlename', selectedValue); // Use the selected dropdown value
    formData.append('description', data.description);
    formData.append('link', data.link);
    formData.append('subtitle', data.subtitle);
    if (mainTitleImage) {
      formData.append('image', mainTitleImage);
    }
    data.fields.forEach((field, index) => {
      formData.append(`fields[${index}][title]`, field.title);
      formData.append(`fields[${index}][link]`, field.link);
      formData.append(`fields[${index}][description]`, field.description);
      formData.append(`fields[${index}][description2]`, field.description2);
      formData.append(`fields[${index}][order]`, field.order);
      if (field.image && field.image.length > 0) {
        Array.from(field.image).forEach((img, imgIndex) => {
          formData.append(`fields[${index}][image][${imgIndex}]`, img);
        });
      }
      
    });

    try {
      if (editing) {
        const response = await axios.put(`${constants.API_BASE_URL}whychooseus/${index}`, formData);
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        toast.success("Edited successfully");
        setItems(updatedItems);
        fetchData();
      } else {
        const response = await axios.post(`${constants.API_BASE_URL}whychooseus`, formData);
        setItems([...items, response.data]);
        toast.success("Added successfully");
        fetchData();
      }
      handleClose();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleEdit = (item) => {
    setSelectedValue(item.titlename); // Set the selected service title
    setValue('description', item.description);
    setValue('link', item.link);
    
    const fieldsWithImages = item.fields.map(field => ({
      ...field,
      image: field.image ? field.image : null, // Include the image in the fields
    }));

    setValue('fields', fieldsWithImages);
    setIndex(item._id);
    setServiceDetailId(item._id)
    
    setEditing(true);
    handleShow();
  };

  const handleDelete = async (data) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
    try {
      await axios.delete(`${constants.API_BASE_URL}whychooseus/${data._id}`);
      const filteredItems = items.filter((item, index) => index !== data._id);
      setItems(filteredItems);
      toast.success("Deleted successfully");
      fetchData();
    } catch (error) {
      fetchData();
      console.error('Error deleting item:', error);
    }
  }
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setSelectedValue(selectedService);
    // Update the link based on the selected service
    const selectedServiceObj = serviceHeading.find(service => service.text === selectedService);
    if (selectedServiceObj) {
      setValue('link', selectedServiceObj.link); // Update link input based on the selected service
    }
  };

  const handleDeleteImage = async (fieldIndex, imageIndex) => {
    console.log('=======',serviceDetailId)
    try {
      //const serviceDetailId = items._id;
      const url = `${constants.API_BASE_URL}whychooseus/fieldImage/${serviceDetailId}/fields/${fieldIndex}/image/${imageIndex}`;
  
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      const data = await response.json();
  
      if (data.success) {
        const updatedFields = [...fields];
        updatedFields[fieldIndex].image.splice(imageIndex, 1);
        setFields(updatedFields);
        console.log('Image deleted successfully')
      } else {
        console.log('Failed to delete image')
      }
    } catch (error) {
      console.error('Error deleting image:', error);
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

  // const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // const pageCount = Math.ceil(items.length / itemsPerPage);
  const filteredItems = items.filter((item) =>
    item?.titlename?.toLowerCase().includes(searchTerm.toLowerCase()) ||  // Filter by title
    item?.link?.toLowerCase().includes(searchTerm.toLowerCase())          // Filter by link
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
          <Button onClick={handleShow}>Add Why choose Us Service</Button>
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
                <th>Link</th>
               
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {paginatedItems.map((item, idx) => (
                <tr key={idx}>
                   <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td>{item.titlename}</td>
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
                onChange={handleServiceChange} // Handle change for dropdown
                // disabled={!!editing}
              >
                <option value="">Select a service</option>
                <option value="What We Build">What We Build</option>
                <option value="Why Choose Code Trios">Why Choose Code Trios?</option>
                {serviceHeading.map(service => (
                  <option key={service._id} value={service.text}>{service.text}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sub Title</Form.Label>
              <Form.Control type="text" name="subtitle" {...register('subtitle')} />
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
              <Form.Label>Link</Form.Label>
              <Form.Control type="text" name="link" {...register('link')}  disabled={!!editing} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Title Image</Form.Label>
            <Form.Control 
              type="file" 
              onChange={(e) => setMainTitleImage(e.target.files[0])} 
            />
            {mainTitleImage && (
              <img 
                src={URL.createObjectURL(mainTitleImage)} 
                alt="Main Title" 
                style={{ width: '100px', marginTop: '10px' }} 
              />
            )}
          </Form.Group>
            {fields.map((field, index) => (
              <div key={field.id} className="mb-3">
                 <hr className="text-success"/>
                 <h5>Field {index + 1}</h5>
                {field.title && <h6 className="text-success">Section : {field.title} </h6>}
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" {...register(`fields.${index}.title`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="text" {...register(`fields.${index}.link`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Controller
                  name={`fields.${index}.description`} // Adjust path based on index
                  control={control}
                  render={({ field }) => (
                    <ReactQuill
                      value={field.value || ''} // Ensure the value is handled correctly
                      onChange={field.onChange} // Update form state on change
                     
                    />
                  )}
                />
                 
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description 2</Form.Label>
                  <Controller
                  name={`fields.${index}.description2`} // Adjust path based on index
                  control={control}
                  render={({ field }) => (
                    <ReactQuill
                      value={field.value || ''} // Ensure the value is handled correctly
                      onChange={field.onChange} // Update form state on change
                     
                    />
                  )}
                />
                 
                </Form.Group>
                <Form.Group>
                  <Form.Label>Order</Form.Label>
                  <Form.Control type="number" {...register(`fields.${index}.order`)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" {...register(`fields.${index}.image`)} multiple />
                  {field.image && Array.isArray(field.image) && field.image.map((img, imgIndex) => (
                 <>   
                <img 
                  key={imgIndex}
                  src={img.fileName &&  constants.Image_BASE_URL + img.fileName} 
                  alt={`Current ${imgIndex + 1}`} 
                  style={{ width: '100px', marginTop: '10px', marginRight: '5px' }} 
                />
                <Button variant="danger" onClick={() => handleDeleteImage(index, imgIndex)}>Delete</Button>
                </>
                
  ))}
                </Form.Group>
                <Button variant="danger" onClick={() => handleRemovefield(serviceDetailId,field._id,index)}>Remove Field</Button>
              </div>
            ))}

            <Button variant="primary" onClick={() => append({ title: '', link: '', description: '', image: null })}>
              Add Field
            </Button>

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

export default AboutOtherSection;
