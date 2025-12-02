import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Pagination,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getItem } from "../../../services/routes.backend.services";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useSelector } from "react-redux";

const Mapdata = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  const [mapdataMains, setMapdataMains] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMapdata, setEditMapdata] = useState(null);
  const [mapdataText, setMapdataText] = useState("");
  const [mapdataDescription, setMapdataDescription] = useState("");
  const [mapdataLatitude, setMapdataLatitude] = useState("");
  const [mapdataLongitude, setMapdataLongitude] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Sorting states
  const [sortField, setSortField] = useState("title"); // Default sort field
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMapdataMainItems();
  }, []);

  const fetchMapdataMainItems = async () => {
    try {
      const response = await getItem("maps");
      // console.log(response.data.maps)
      setMapdataMains(response.data.maps);
      // sortMapdata(sortField, sortOrder); // Sort after fetching
    } catch (error) {
      console.error("Error fetching maps items:", error);
      toast.error("There was an error!");
    }
  };

  const sortMapdata = (field, order) => {
    const sortedData = [...mapdataMains].sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setMapdataMains(sortedData);
  };
  console.log(sortMapdata);

  const handleSort = (field) => {
    const newOrder =
      sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newOrder);
    sortMapdata(field, newOrder); // Sort the data immediately
  };

  const handleAdd = () => {
    setEditMapdata(null);
    resetFormFields();
    setShowModal(true);
  };

  const handleEdit = (maps) => {
    setEditMapdata(maps);
    setMapdataText(maps.title);
    setMapdataDescription(maps.description);
    setMapdataLatitude(maps.latitude || "");
    setMapdataLongitude(maps.longitude || "");
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}maps/${id}`, config);
        setMapdataMains(mapdataMains.filter((maps) => maps.id !== id));
        toast.success("Deleted successfully");
        fetchMapdataMainItems();
      } catch (error) {
        console.error("Error deleting mapdata:", error);
        toast.error("There was an error!");
      }
    }
  };

  const handleMapdataSubmit = async (e) => {
    e.preventDefault();
    const mapdata = {
      title: mapdataText,
      description: mapdataDescription,
      latitude: mapdataLatitude,
      longitude: mapdataLongitude,
    };

    try {
      if (editMapdata) {
        await axios.put(
          `${constants.API_BASE_URL}maps/${editMapdata._id}`,
          mapdata,
          config
        );
        toast.success("Edited successfully");
      } else {
        await axios.post(`${constants.API_BASE_URL}maps`, mapdata, config);
        toast.success("Added successfully");
      }
      fetchMapdataMainItems();
      setShowModal(false);
    } catch (error) {
      console.error("Error saving mapdata:", error);
      toast.error("There was an error!");
    }
  };

  const resetFormFields = () => {
    setMapdataText("");
    setMapdataDescription("");
    setMapdataLatitude("");
    setMapdataLongitude("");
  };
  console.log(mapdataMains);
  // Filtered and Sorted Data
  const filteredMapdata = mapdataMains.filter((maps) =>
    maps.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMapdata.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMapdata.length / itemsPerPage);
  // console.log(currentItems)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <ToastContainer />
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={handleAdd}>
            Add Location
          </Button>
        </Col>
        <Col md={6}>
          {" "}
          <input
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control mb-3"
          />
        </Col>
      </Row>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => handleSort("title")}>Location</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((maps, i) => (
            <tr key={maps._id}>
              <td>{indexOfFirstItem + i + 1}</td>
              <td>{maps.title}</td>
              <td>{maps.latitude || "No latitude"}</td>
              <td>{maps.longitude || "No longitude"}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(maps)}>
                  {" "}
                  <FaEdit />
                </Button>
                {userRole === "user" && (
                <Button
                  variant="danger"
                  onClick={() => handleDelete(maps._id)}
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

      {/* Pagination Component with Arrows */}
      <Pagination className="mt-3">
        <Pagination.Prev
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        />
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        />
      </Pagination>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMapdata ? "Edit Location" : "Add Location"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleMapdataSubmit}>
            <Form.Group controlId="formMapdataText">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={mapdataText}
                onChange={(e) => setMapdataText(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMapdataDescription">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                value={mapdataDescription}
                onChange={setMapdataDescription}
                theme="snow"
              />
            </Form.Group>
            <Form.Group controlId="formMapdataLatitude">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="text"
                value={mapdataLatitude}
                onChange={(e) => setMapdataLatitude(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMapdataLongitude">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="text"
                value={mapdataLongitude}
                onChange={(e) => setMapdataLongitude(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editMapdata ? "Save Changes" : "Add Location"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Mapdata;
