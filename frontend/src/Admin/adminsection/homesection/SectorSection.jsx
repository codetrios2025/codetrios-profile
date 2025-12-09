import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import axios from "axios";
import constants from "../../../services/constants";
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import { getItem } from "../../../services/routes.backend.services";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";

const SectorSection = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    title: "",
    description: "",
    order: "",
    link: "",
    image: "",
    innerimage: "",
    subdescription: "",
    projecttitle: "",
    fields: [
      { title: "", subtitle: "", order: "", description: "", pageimage: "" },
    ],
  });
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getItem("sector");
      setItems(response.data.sector);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setCurrentItem({
      title: "",
      description: "",
      link: "",
      order: "",
      image: "",
      innerimage: "",
      subdescription: "",
      projecttitle: "",
      fields: [
        { title: "", subtitle: "", order: "", description: "", pageimage: "" },
      ],
    });
    setEditing(false);
  };

  const handleShow = () => setShow(true);

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", currentItem.title);
    formData.append("link", currentItem.link);
    formData.append("description", currentItem.description);
    formData.append("subdescription", currentItem.subdescription);
    formData.append("projecttitle", currentItem.projecttitle);
    formData.append("order", currentItem.order);
    if (e.target.image.files[0]) {
      formData.append("image", e.target.image.files[0]);
    }
    if (e.target.innerimage.files[0]) {
      formData.append("innerimage", e.target.innerimage.files[0]);
    }

    currentItem.fields.forEach((field, idx) => {
      formData.append(`fields[${idx}][title]`, field.title);
      formData.append(`fields[${idx}][subtitle]`, field.subtitle);
      formData.append(`fields[${idx}][order]`, field.order);
      formData.append(`fields[${idx}][description]`, field.description);
      if (field.pageimage) {
        formData.append(`fields[${idx}][pageimage]`, field.pageimage);
      }
    });

    try {
      if (editing) {
        const response = await axios.put(
          `${constants.API_BASE_URL}sector/${currentItem._id}`,
          formData,
          config
        );
        const updatedItems = [...items];
        updatedItems[index] = response.data;
        setItems(updatedItems);
        handleClose();
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}sector`,
          formData,
          config
        );
        setItems([...items, response.data]);
        handleClose();
      }
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  const handleEdit = (item, idx) => {
    setCurrentItem(item);
    setIndex(idx);
    setEditing(true);
    handleShow();
  };

  const handleDelete = async (data) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${constants.API_BASE_URL}sector/${data._id}`,
          config
        );
        const filteredItems = items.filter((item) => item._id !== data._id);
        setItems(filteredItems);
        fetchData();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleImageChange = (e) => {
    setCurrentItem({ ...currentItem, image: e.target.files[0] });
  };

  const handleInnerImageChange = (e) => {
    setCurrentItem({ ...currentItem, innerimage: e.target.files[0] });
  };

  const handleFieldChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...currentItem.fields];
    updatedFields[index][name] = value;
    setCurrentItem({ ...currentItem, fields: updatedFields });
  };

  const handlePageImageChange = (index, e) => {
    const updatedFields = [...currentItem.fields];
    updatedFields[index].pageimage = e.target.files[0];
    setCurrentItem({ ...currentItem, fields: updatedFields });
  };

  const handleAddField = () => {
    setCurrentItem({
      ...currentItem,
      fields: [
        ...currentItem.fields,
        { title: "", subtitle: "", order: "", description: "", pageimage: "" },
      ],
    });
  };

  const handleRemoveField = (index) => {
    const updatedFields = currentItem.fields.filter((_, i) => i !== index);
    setCurrentItem({ ...currentItem, fields: updatedFields });
  };
  // Search and Pagination Logic
  const filteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };
  return (
    <Container>
      <Row className="my-4">
        <Col md={6}>
          <Button onClick={handleShow}>Add Sector</Button>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by title..."
            value={searchInput}
            onChange={handleSearchChange}
            className="my-3"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Order</th>
                <th>Link</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.order}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </td>
                  <td>
                    {item.image && (
                      <img
                        src={`${constants.Image_BASE_URL}${item.image}`}
                        alt="Sector"
                        width="50"
                      />
                    )}
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(item, idx)}
                    >
                      <FaEdit />
                    </Button>{" "}
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
        </Col>
      </Row>
      {/* Pagination Controls */}
      <Row>
        <Col>
          <Pagination>
            {Array.from({ length: totalPages }, (_, idx) => (
              <Pagination.Item
                key={idx}
                active={idx + 1 === currentPage}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? "Edit Sector" : "Add Sector"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentItem.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Project Heading</Form.Label>
              <Form.Control
                type="text"
                name="projecttitle"
                value={currentItem.projecttitle}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                value={currentItem.link}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                name="description"
                value={currentItem.description || ""}
                onChange={(value) =>
                  setCurrentItem({ ...currentItem, description: value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sub Description</Form.Label>
              <ReactQuill
                name="subdescription"
                value={currentItem.subdescription || ""}
                onChange={(value) =>
                  setCurrentItem({ ...currentItem, subdescription: value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order</Form.Label>
              <Form.Control
                type="number"
                name="order"
                value={currentItem.order}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inner Page Image</Form.Label>
              <Form.Control
                type="file"
                name="innerimage"
                onChange={handleInnerImageChange}
              />
            </Form.Group>

            {currentItem.fields.map((field, index) => (
              <div key={index}>
                {field.title && (
                  <h6 className="text-success">Section : {field.title} </h6>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Project Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={field.title}
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="subtitle"
                    value={field.subtitle}
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Order</Form.Label>
                  <Form.Control
                    type="number"
                    name="order"
                    value={field.order}
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={field.description}
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="pageimage"
                    onChange={(e) => handlePageImageChange(index, e)}
                  />
                  {field.pageimage !== "" ? (
                    <img
                      src={`${constants.Image_BASE_URL}${field.pageimage}`}
                      alt="Sector"
                      width="50"
                    />
                  ) : (
                    <></>
                  )}
                </Form.Group>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveField(index)}
                >
                  Remove Field
                </Button>
                <hr />
              </div>
            ))}

            <Button variant="primary" onClick={handleAddField}>
              Add Field
            </Button>
            <Button variant="success" type="submit" className="mt-3">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SectorSection;
