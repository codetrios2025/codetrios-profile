import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Pagination } from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import constants from "../../../../services/constants";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; // Import Quill CSS
import slugify from "slugify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ServiceImage = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [services, setServices] = useState([]);
  const [serviceMains, setServiceMains] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editService, setEditService] = useState(null);
  const [serviceText, setServiceText] = useState("");
  const [serviceLink, setServiceLink] = useState("");
  const [serviceOrder, setServiceOrder] = useState("");
  const [serviceImage, setServiceImage] = useState(null);
  const [innerImage, setInnerImage] = useState(null);
  const [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState(""); // Initial value for select
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const servicesPerPage = 5;

  // State for current images when editing
  const [currentServiceImage, setCurrentServiceImage] = useState("");
  const [currentInnerImage, setCurrentInnerImage] = useState("");
  const [imageIcon, setImageIcon] = useState(null);
  const [currentImageIcon, setCurrentImageIcon] = useState("");

  useEffect(() => {
    fetchServices();
    fetchServicesImage();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}homeservices`);
      setServiceMains(response.data.homeservice);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchServicesImage = async () => {
    try {
      const response = await axios.get(
        `${constants.API_BASE_URL}homeservicesimage`
      );
      setServices(response.data.homeserviceimage);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", serviceText);
    formData.append(
      "link",
      slugify(serviceText, { lower: true, strict: true })
    );
    formData.append("order", serviceOrder);
    formData.append("image", serviceImage);
    formData.append("innerimage", innerImage);
    formData.append("description", description);
    formData.append("serviceId", selectedValue);
    formData.append("imageicon", imageIcon);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    try {
      if (editService) {
        await axios.put(
          `${constants.API_BASE_URL}homeservicesimage/${editService._id}`,
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
          `${constants.API_BASE_URL}homeservicesimage`,
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
      fetchServicesImage();
      setShowModal(false);
      resetFormFields();
    } catch (error) {
      console.error("Error saving service:", error);
      toast.error("There was an error !");
    }
  };

  const handleAdd = () => {
    setEditService(null);
    resetFormFields();
    setShowModal(true);
  };

  const handleEdit = (service) => {
    setEditService(service);
    setServiceText(service.text);
    // setServiceLink(service.link);
    setServiceOrder(service.order);
    setServiceImage(null); // Reset image field
    setInnerImage(null); // Reset inner image field
    setDescription(service.description);
    setSelectedValue(service.serviceId); // Set selected value for editing
    setImageIcon(null); // Reset image icon field
    setCurrentImageIcon(`${constants.Image_BASE_URL}/${service.imageicon}`);
    setCurrentServiceImage(`${constants.Image_BASE_URL}/${service.image}`);
    setCurrentInnerImage(`${constants.Image_BASE_URL}/${service.innerimage}`);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${constants.API_BASE_URL}homeservicesimage/${id}`,
          config
        );
        fetchServicesImage();
        toast.success("Deleted successfully");
      } catch (error) {
        console.error("Error deleting service:", error);
        toast.error("There was an error !");
      }
    }
  };

  const resetFormFields = () => {
    setServiceText("");
    setServiceLink("");
    setServiceOrder("");
    setServiceImage(null);
    setInnerImage(null);
    setImageIcon(null); // Reset image icon field

    setDescription("");
    setSelectedValue("");
    setCurrentServiceImage("");
    setCurrentInnerImage("");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Filter and sort the services based on search term
  const filteredServices = services
    .filter((service) =>
      service.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.text.localeCompare(b.text));

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const renderPaginationItems = () => {
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-sm-6">
          <Button variant="primary" onClick={handleAdd}>
            Add Images
          </Button>
        </div>
        <div className="col-sm-6">
          {" "}
          <Form.Control
            type="text"
            placeholder="Search services..."
            className="mt-3 mb-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Search Input */}

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Text</th>
            <th>Link</th>
            <th>Service</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentServices.map((service, i) => (
            <tr key={service._id}>
              <td>{indexOfFirstService + i + 1}</td>
              {/* <td><img src={`${constants.Image_BASE_URL}/${service.image}`} alt={service.text} style={{ width: '100px' }} /></td> */}
              <td>{service.text}</td>
              <td>{service.link}</td>
              <td>{service.serviceId}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(service)}>
                  {" "}
                  <FaEdit />
                </Button>
                {userRole === "user" && (
                <Button
                  variant="danger"
                  onClick={() => handleDelete(service._id)}
                  className="ml-2"
                >
                  {" "}
                  <FaTrash />
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="mt-3">{renderPaginationItems()}</Pagination>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editService ? "Edit Images" : "Add Images"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleServiceSubmit}>
            <Form.Group controlId="formServiceSelect" className="mb-3">
              <Form.Label>Select Service</Form.Label>
              <Form.Select
                aria-label="Select Service"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                disabled={!!editService} // Disable when editing
              >
                <option value="">Select a service</option>
                {serviceMains.map((service) => (
                  <option key={service._id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {currentServiceImage && (
              <div className="mb-3">
                <img
                  src={currentServiceImage}
                  alt="Current service"
                  style={{ width: "100px" }}
                />
              </div>
            )}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>File input</Form.Label>
              <Form.Control
                type="file"
                size="sm"
                onChange={(e) => setServiceImage(e.target.files[0])}
              />
            </Form.Group>
            {currentInnerImage && (
              <div className="mb-3">
                <img
                  src={currentInnerImage}
                  alt="Current inner image"
                  style={{ width: "100px" }}
                />
              </div>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Inner page Image</Form.Label>
              <Form.Control
                type="file"
                name="innerimage"
                onChange={(e) => setInnerImage(e.target.files[0])}
              />
            </Form.Group>
            {currentImageIcon && (
              <div className="mb-3">
                <img
                  src={currentImageIcon}
                  alt="Current image icon"
                  style={{ width: "100px" }}
                />
              </div>
            )}
            <Form.Group controlId="formImageIcon" className="mb-3">
              <Form.Label>Image Icon</Form.Label>
              <Form.Control
                type="file"
                name="imageicon"
                onChange={(e) => setImageIcon(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group controlId="formText" className="mb-3">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                value={serviceText}
                onChange={(e) => setServiceText(e.target.value)}
                disabled={!!editService} // Disable when editing
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <ReactQuill value={description} onChange={setDescription} />
            </Form.Group>
            {/* <Form.Group controlId="formLink" className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter link"
                value={serviceLink}
                onChange={(e) => setServiceLink(e.target.value)}
              />
            </Form.Group> */}
            <Form.Group controlId="formOrder" className="mb-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter order number"
                value={serviceOrder}
                onChange={(e) => setServiceOrder(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" block>
              {editService ? "Update service" : "Create service"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ServiceImage;
