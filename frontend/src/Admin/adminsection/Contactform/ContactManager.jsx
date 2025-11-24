import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import ContactFormModal from "./ContactFormModal";
import axios from "axios";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { token } = useSelector((state) => state.auth);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}address`);
      // Assuming response.data.addresses is the array of addresses
      setContacts(
        Array.isArray(response.data.addresses) ? response.data.addresses : []
      );
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setContactToEdit(null);
  };

  const addContact = async (contact) => {
    try {
      const response = await axios.post(
        `${constants.API_BASE_URL}address`,
        contact,
        config
      );
      setContacts((prevContacts) =>
        Array.isArray(prevContacts)
          ? [...prevContacts, response.data]
          : [response.data]
      );
      toast.success("Added successfully");
    } catch (error) {
      console.error("Failed to add contact", error);
      toast.error("There was an error submitting the form!");
    }
  };

  const editContact = async (updatedContact) => {
    try {
      const response = await axios.put(
        `${constants.API_BASE_URL}address/${updatedContact._id}`,
        updatedContact,
        config
      );
      setContacts((prevContacts) =>
        Array.isArray(prevContacts)
          ? prevContacts.map((contact) =>
              contact._id === updatedContact._id ? response.data : contact
            )
          : []
      );
      toast.success("Update successfully");
    } catch (error) {
      console.error("Failed to edit contact", error);
      toast.error("There was an error submitting the form!");
    }
    fetchContacts();
  };

  const handleEdit = (contact) => {
    setContactToEdit(contact);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}address/${id}`, config);
        setContacts((prevContacts) =>
          Array.isArray(prevContacts)
            ? prevContacts.filter((contact) => contact._id !== id)
            : []
        );
        toast.success("Deleted successfully");
      } catch (error) {
        console.error("Failed to delete contact", error);
        toast.error("Error deleteing Item");
      }
    }
  };
  var filteredContacts = "";
  if (contacts.length > 0) {
    filteredContacts = contacts.filter(
      (contact) =>
        contact.city &&
        contact.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    filteredContacts = [];
  }
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container ">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6">
          <Button variant="primary" onClick={handleShow}>
            Add Contact
          </Button>
        </div>
        <div className="col-md-6">
          {" "}
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="Search by city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </div>
      </div>

      <ContactFormModal
        show={showModal}
        handleClose={handleClose}
        addContact={addContact}
        editContact={editContact}
        contactToEdit={contactToEdit}
      />
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Address</th>
            <th>Page Render</th>

            <th>Actions</th>
          </tr>
        </thead>
        {contacts && (
          <tbody>
            {paginatedContacts.map((contact, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>{contact.city}</td>
                <td>{contact.addressName}</td>
                <td>{contact.page}</td>

                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(contact)}
                    className="mr-2"
                  >
                    <FaEdit />
                  </Button>
                  {userRole === "user" && (
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(contact._id)}
                  >
                    <FaTrash />
                  </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
      <div className="d-flex ">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            variant={currentPage === index + 1 ? "primary" : "secondary"}
            onClick={() => setCurrentPage(index + 1)}
            className="mx-1"
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ContactManager;
