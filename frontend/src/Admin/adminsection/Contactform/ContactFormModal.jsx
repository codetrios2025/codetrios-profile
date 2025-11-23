import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
const ContactFormModal = ({ show, handleClose, addContact, editContact, contactToEdit }) => {
  const [contact, setContact] = useState({
    title: '',
    city: '',
    addressName: '',
    phoneNumber: '',
    email: '',
    page: '',
    order:'',
  });

  const pageTitle = ["About", "Contact"];

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    } else {
      setContact({
        title: '',
        city: '',
        addressName: '',
        phoneNumber: '',
        email: '',
        page: '',
        order:'',
      });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      editContact(contact);
    } else {
      addContact(contact);
    }
    handleClose();
  };
  const handleQuillChange = (value) => {
    setContact((prevContact) => ({
      ...prevContact,
      addressName: value, // Update addressName with Quill's value
    }));
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{contactToEdit ? 'Edit Contact' : 'Add Contact'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPage">
            <Form.Label>Page Title</Form.Label>
            <Form.Control
              as="select"
              name="page"
              value={contact.page}
              onChange={handleChange}
              required
            >
              <option value="">Select Page</option>
              {pageTitle.map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Address Title</Form.Label>
            {/* <Form.Control
              type="text"
              name="title"
              value={contact.title}
              onChange={handleChange}
              required
            /> */}
            <Form.Control
            as="select"
            name="title"
            value={contact.title}
            onChange={handleChange}
            required
          >
            <option value="">Select Address Title</option>
            <option value="Branch Office">Branch Office</option>
            <option value="Registered Address">Registered Address</option>
            {/* <option value="Overseas Branch">Overseas Branch</option> */}
            <option value="Subsidiary Office">Subsidiary Office</option>
            <option value="JV Office">JV Office</option>
            <option value="Corporate Address">Corporate Address</option>
            <option value="Foreign Branch Offices">Foreign Branch Offices</option>
            <option value="Other Operating Locations">Other Operating Locations</option>
          </Form.Control>
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={contact.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formAddressName">
            <Form.Label>Address</Form.Label>
            {/* <Form.Control
              type="text"
              name="addressName"
              value={contact.addressName}
              onChange={handleChange}
              required
            /> */}
             <ReactQuill
              value={contact.addressName}
              onChange={handleQuillChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={contact.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formOrder">
            <Form.Label>Address Order</Form.Label>
            <Form.Control
              type="number"
              name="order"
              value={contact.order}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;
