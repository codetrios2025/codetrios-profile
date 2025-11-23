import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import constants from "../../../../services/constants";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import slugify from "slugify";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ServiceTab = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [OfferMains, setOfferMains] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editBanner, setEditBanner] = useState(null);
  const [offerText, setOfferText] = useState("");
  const [bannerOrder, setBannerOrder] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const response = await axios.get(`${constants.API_BASE_URL}homeservices`);
    setOfferMains(response.data.homeservice);
  };

  const handleAdd = () => {
    setEditBanner(null);
    resetFormFields();
    setShowModal(true);
  };

  const handleEdit = (offer) => {
    setEditBanner(offer);
    setOfferText(offer.title);
    setOfferDescription(offer.description);
    setBannerOrder(offer.order);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      await axios.delete(`${constants.API_BASE_URL}homeservices/${id}`, config);
      // toast.success("Deleted successfully");
      fetchServices();
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!offerText) formErrors.offerText = "Service Title is required";
    if (!offerDescription)
      formErrors.offerDescription = "Service Description is required";
    if (!bannerOrder) {
      formErrors.bannerOrder = "Order Number is required";
    } else if (isNaN(bannerOrder)) {
      formErrors.bannerOrder = "Order Number must be a number";
    }
    if (!imageFile && !editBanner) formErrors.imageFile = "Image is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("title", offerText);
    formData.append("description", offerDescription);
    formData.append("order", bannerOrder);
    formData.append("link", slugify(offerText, { lower: true, strict: true }));
    if (imageFile) {
      formData.append("image", imageFile);
    }

    if (editBanner) {
      await axios.put(
        `${constants.API_BASE_URL}homeservices/${editBanner._id}`,
        formData,
        config,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Edited successfully");
    } else {
      await axios.post(
        `${constants.API_BASE_URL}homeservices`,
        formData,
        config,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Added successfully");
    }
    setShowModal(false);
    fetchServices();
  };

  const resetFormFields = () => {
    setOfferText("");
    setBannerOrder("");
    setOfferDescription("");
    setImageFile(null);
    setErrors({});
  };

  return (
    <div className="container">
      <ToastContainer />
      <Button variant="primary" onClick={handleAdd}>
        Add Service Tab
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th></th>
            <th>Service Title</th>
            <th>Description</th>
            <th>Order</th>
            <th>Image</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {OfferMains.map((OfferMain, i) => (
            <tr key={OfferMain._id}>
              <td>{i + 1}</td>
              <td>{OfferMain.title}</td>
              <td>{parse(`${OfferMain.description}`)}</td>
              <td>{OfferMain.order}</td>
              <td>
                <img
                  src={`${constants.Image_BASE_URL}${OfferMain.image}`}
                  alt={OfferMain.title}
                  width="50"
                />
              </td>
              <td>
                <a
                  href={OfferMain.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {OfferMain.link}
                </a>
              </td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(OfferMain)}>
                  {" "}
                  <FaEdit />
                </Button>
                {userRole === "user" && (
                <Button
                  variant="danger"
                  onClick={() => handleDelete(OfferMain._id)}
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
          <Modal.Title>
            {editBanner ? "Edit Service" : "Add Service"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOfferSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Service Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Service Title"
                value={offerText}
                onChange={(e) => setOfferText(e.target.value)}
                isInvalid={!!errors.offerText}
                disabled={!!editBanner} // Disable when editing
              />
              <Form.Control.Feedback type="invalid">
                {errors.offerText}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Service Description</Form.Label>
              <ReactQuill
                value={offerDescription}
                onChange={setOfferDescription}
              />
              {errors.offerDescription && (
                <div className="invalid-feedback d-block">
                  {errors.offerDescription}
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Order Number"
                value={bannerOrder}
                onChange={(e) => setBannerOrder(e.target.value)}
                isInvalid={!!errors.bannerOrder}
              />
              <Form.Control.Feedback type="invalid">
                {errors.bannerOrder}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
                isInvalid={!!errors.imageFile}
              />
              <Form.Control.Feedback type="invalid">
                {errors.imageFile}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" block>
              {editBanner ? "Update Service" : "Create Service"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ServiceTab;
