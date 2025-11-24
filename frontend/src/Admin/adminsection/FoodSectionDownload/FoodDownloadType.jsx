import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Table,
  Pagination,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
// List of Page Types
const pageTypes = [
  "Assurance",
  "Project",
  "Certification",
  "Customer",
  "Downloads",
  "Ayush",
  "Food",
];
const DownloadType = () => {
  const [allDownloadTypes, setAllDownloadTypes] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const downloadTypesPerPage = 5;

  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      order: "", 
      pageType: "",
    },
  });

  useEffect(() => {
    fetchDownloadTypes();
  }, []);

  const fetchDownloadTypes = async () => {
    try {
      const response = await axios.get(
        `${constants.API_BASE_URL}fooddownloadtypes`
      );
      setAllDownloadTypes(response.data.DownloadTypes);
    } catch (error) {
      console.error("Error fetching download types:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
    reset();
    setEditIndex(null);
  };

  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      order: data.order, // Include order
      pageType: data.pageType, // Include order
    };
    try {
      if (editIndex !== null) {
        await axios.put(
          `${constants.API_BASE_URL}fooddownloadtypes/${editIndex._id}`,
          payload,
          config
        );
        toast.success("Updated successfully");
      } else {
        await axios.post(
          `${constants.API_BASE_URL}fooddownloadtypes`,
          payload,
          config
        );
        toast.success("Added successfully");
      }
      fetchDownloadTypes();
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    }
  };

  const handleEdit = (downloadType) => {
    setEditIndex(downloadType);
    setValue("title", downloadType.title);
    setValue("order", downloadType.order); // Populate order
    setValue("pageType", downloadType.pageType); // Populate order

    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}fooddownloadtypes/${id}`, config);
        setAllDownloadTypes((prev) => prev.filter((item) => item._id !== id));
        toast.success("Deleted successfully");
        if (
          Math.ceil((allDownloadTypes.length - 1) / downloadTypesPerPage) <
            currentPage &&
          currentPage > 1
        ) {
          setCurrentPage((prev) => prev - 1);
        }
      } catch (error) {
        console.error("Error deleting download type:", error);
        toast.error("Error deleting download type");
      }
    }
  };

const filteredDownloadTypes = (allDownloadTypes || [])
  .filter((downloadType) =>
    downloadType.title?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => a.order - b.order);

  const indexOfLastDownloadType = currentPage * downloadTypesPerPage;
  const indexOfFirstDownloadType = indexOfLastDownloadType - downloadTypesPerPage;
  const currentDownloadTypes = filteredDownloadTypes.slice(
    indexOfFirstDownloadType,
    indexOfLastDownloadType
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={handleShow}>
            Add Download Type
          </Button>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 mb-3"
          />
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Order</th>
              <th>pageType</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDownloadTypes.map((downloadType, index) => (
              <tr key={downloadType._id}>
                <td>{indexOfFirstDownloadType + index + 1}</td>
                <td>{downloadType.title}</td>
                <td>{downloadType.order}</td>
                <td>{downloadType.pageType}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(downloadType)}
                    className="mr-2"
                  >
                    <FaEdit />
                  </Button>
                   {userRole === "user" && (
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(downloadType._id)}
                  >
                    <FaTrash />
                  </Button>
                   )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {Array.from(
            { length: Math.ceil(filteredDownloadTypes.length / downloadTypesPerPage) },
            (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Download Type" : "Add Download Type"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                {...register("title", { required: "Title is required" })}
                isInvalid={!!errors.title}
                 disabled={editIndex !== null}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label>Order</Form.Label>
            <Form.Control
              type="number"
              {...register("order", {
                required: "Order is required",
                valueAsNumber: true, // Ensure numeric value
              })}
              isInvalid={!!errors.order}
            />
            <Form.Control.Feedback type="invalid">
              {errors.order?.message}
            </Form.Control.Feedback>
          </Form.Group>
            <Form.Group>
              <Form.Label>Page Type</Form.Label>
              <Form.Control as="select" {...register("pageType")} required>
                <option value="">Select Type</option>
                {pageTypes.map((type, index) => (
                  <option key={index} value={type}>
                  {type==="Downloads"? " Assurance Download":type} 
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                {editIndex !== null ? "Update Download Type" : "Add Download Type"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DownloadType;
