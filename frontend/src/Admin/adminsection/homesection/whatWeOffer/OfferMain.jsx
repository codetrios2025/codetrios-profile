import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getItem } from "../../../../services/routes.backend.services";
import constants from "../../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const OfferMain = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [offerMains, setOfferMains] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editOffer, setEditOffer] = useState(null);
  const [offerText, setOfferText] = useState("");
  const [offerDescription, setOfferDescription] = useState("");

  useEffect(() => {
    fetchOfferMainItems();
  }, []);

  const fetchOfferMainItems = async () => {
    try {
      const response = await getItem("whoweoffermain");
      // const response = await axios.get(`${ constants.API_BASE_URL}whoweoffermain`);
      setOfferMains(response.data.whoweoffermain);
    } catch (error) {
      console.error("Error fetching offer items:", error);
      toast.error("There was an error !");
    }
  };

  const handleAdd = () => {
    setEditOffer(null);
    resetFormFields();
    setShowModal(true);
  };

  const handleEdit = (offer) => {
    setEditOffer(offer);
    setOfferText(offer.title);
    setOfferDescription(offer.description);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${constants.API_BASE_URL}whoweoffermain/${id}`,
          config
        );
        setOfferMains(offerMains.filter((offer) => offer.id !== id));
        toast.success("Deleted successfully");
        fetchOfferMainItems();
      } catch (error) {
        console.error("Error deleting offer:", error);
        toast.error("There was an error !");
      }
    }
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();
    const offerData = {
      title: offerText,
      description: offerDescription,
    };

    try {
      if (editOffer) {
        await axios.put(
          `${constants.API_BASE_URL}whoweoffermain/${editOffer._id}`,
          offerData,
          config
        );
        toast.success("Edited successfully");
      } else {
        await axios.post(
          `${constants.API_BASE_URL}whoweoffermain`,
          offerData,
          config
        );
        toast.success("Added successfully");
      }
      fetchOfferMainItems();
      setShowModal(false);
    } catch (error) {
      console.error("Error saving offer:", error);
    }
  };

  const resetFormFields = () => {
    setOfferText("");
    setOfferDescription("");
  };

  return (
    <div className="container">
      <ToastContainer />
      <Button variant="primary" onClick={handleAdd}>
        Add Title and Description
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offerMains.map((offer, i) => (
            <tr key={offer._id}>
              <td>{i + 1}</td>
              <td>{offer.title}</td>
              <td>{offer.description}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(offer)}>
                  {" "}
                  <FaEdit />
                </Button>
                {userRole === "user" && (
                <Button
                  variant="danger"
                  onClick={() => handleDelete(offer._id)}
                  className="ml-2"
                >
                  <FaTrash />
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editOffer ? "Edit Offer" : "Add Offer"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOfferSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Offer Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Offer Title"
                value={offerText}
                onChange={(e) => setOfferText(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Offer Description</Form.Label>
              <Form.Control
                as="textarea"
                value={offerDescription}
                onChange={(e) => setOfferDescription(e.target.value)}
                rows={3}
              />
            </Form.Group>
            <Button type="submit" variant="primary" block>
              {editOffer ? "Update Offer" : "Create Offer"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OfferMain;
