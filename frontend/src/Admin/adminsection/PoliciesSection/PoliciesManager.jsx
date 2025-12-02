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
import { FaEdit, FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "../../adminstyle/Style.module.css";
import { useForm, useFieldArray } from "react-hook-form";
import parse from "html-react-parser";
import axios from "axios";
import constants from "../../../services/constants";
import slugify from "slugify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

// List of Indian languages
const indianLanguages = [
  "Assamese",
  "Bengali",
  "Bodo",
  "Dogri",
  "English",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Kashmiri",
  "Konkani",
  "Maithili",
  "Malayalam",
  "Manipuri",
  "Marathi",
  "Nepali",
  "Odia",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
];

const PoliciesManager = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [allPolicies, setAllPolicies] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const policiesPerPage = 5;
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      order: "",
      description: "",
      policydate: "",
      fields: [{ language: "", pdf: null }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}policies`);
      const policiesWithSize = await Promise.all(
        response.data.policies.map(async (policy) => {
          if (policy.pdf) {
            const response = await fetch(
              `${constants.Image_BASE_URL}${policy.pdf}`
            );
            const blob = await response.blob();
            return { ...policy, pdfSize: blob.size };
          }
          return { ...policy, pdfSize: null };
        })
      );
      setAllPolicies(policiesWithSize);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = () => {
    setShow(false);
    reset();
    setEditIndex(null);
  };

  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("order", data.order);
    formData.append("description", data.description);
    formData.append("link", slugify(data.title, { lower: true, strict: true }));
    formData.append("policydate", data.policydate);

    data.fields.forEach((field, index) => {
      formData.append(`pdfs[${index}][language]`, field.language);
      if (field.pdf[0]) {
        formData.append(`pdfs[${index}][pdf]`, field.pdf[0]);
      }
    });

    try {
      if (editIndex !== null) {
        await axios.put(
          `${constants.API_BASE_URL}policies/${editIndex._id}`,
          formData,
          config
        );
        const updatedPolicies = allPolicies.map((policy) =>
          policy._id === editIndex._id ? { ...policy, ...data } : policy
        );
        setAllPolicies(updatedPolicies);
        setEditIndex(null);
        toast.success("Update successfully");
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}policies`,
          formData,
          config
        );
        setAllPolicies([...allPolicies, response.data]);
        toast.success("Added successfully");
      }
      fetchLinks();
      handleClose();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error submitting the form!");
    }
  };

  const handleEdit = (policy) => {
    const formattedPolicy = {
      ...policy,
      policydate: policy.policydate
        ? new Date(policy.policydate).toISOString().split("T")[0]
        : "",
    };

    reset({
      ...formattedPolicy,
      fields: policy.fields ? policy.fields : [{ language: "", pdf: null }],
    });

    setEditIndex(policy);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}policies/${id}`, config);
        const filteredItems = allPolicies.filter((item) => item._id !== id);
        setAllPolicies(filteredItems);
        toast.success("Deleted successfully");
        fetchLinks();
      } catch (error) {
        console.error("There was an error deleting the policy!", error);
        toast.error("Error deleteing Item");
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatFileSize = (size) => {
    if (!size) return "N/A";
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / Math.pow(1024, i)).toFixed(2)} ${
      ["B", "KB", "MB", "GB", "TB"][i]
    }`;
  };

  // // Pagination logic
  // const indexOfLastPolicy = currentPage * policiesPerPage;
  // const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage;
  // const currentPolicies = allPolicies.slice(indexOfFirstPolicy, indexOfLastPolicy);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Filter and sort policies based on the search term
  const filteredPolicies = allPolicies
    .filter(
      (policy) => policy.title.toLowerCase().includes(searchTerm.toLowerCase()) // Assuming policies have a 'title' property
    )
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically

  // Pagination logic
  const indexOfLastPolicy = currentPage * policiesPerPage;
  const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage;
  const currentPolicies = filteredPolicies.slice(
    indexOfFirstPolicy,
    indexOfLastPolicy
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Container>
      {" "}
      <ToastContainer />
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={handleShow}>
            Add Policy
          </Button>
        </Col>
        <Col md={6}>
          {" "}
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 mb-3"
          />
        </Col>
        <Row>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPolicies.map((policy, index) => (
                <tr key={policy._id}>
                  <td>{indexOfFirstPolicy + index + 1}</td>
                  <td>{policy.title}</td>
                  <td>{formatDate(policy.policydate)}</td>

                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(policy)}
                    >
                      <FaEdit />
                    </Button>
                    {userRole === "user" && (
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(policy._id)}
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
          <Pagination>
            {Array.from(
              { length: Math.ceil(allPolicies.length / policiesPerPage) },
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
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Policy" : "Add Policy"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" {...register("title")} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Order</Form.Label>
              <Form.Control type="number" {...register("order")} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" {...register("policydate")} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <ReactQuill
                value={watch("description")}
                onChange={(value) => setValue("description", value)}
              />
            </Form.Group>
            {fields.map((field, index) => (
              <div key={field.id} className="mb-3">
                <Form.Group>
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    as="select"
                    {...register(`fields.${index}.language`)}
                    required
                  >
                    <option value="">Select Language</option>
                    {indianLanguages.map((language) => (
                      <option key={language} value={language}>
                        {language}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>PDF</Form.Label>
                  {/* <Form.Control
                    type="file"
                    {...register(`fields.${index}.pdf`)}
                    accept="application/pdf"
                    required
                  /> */}
                  <Form.Control
                    type="file"
                    accept="application/pdf"
                    {...register(`fields.${index}.pdf`, {
                      required: !field.pdf ? "PDF is required" : false,
                    })}
                  />
                  {field.pdf && (
                    <div className="mt-2">
                      <a
                        href={`${constants.Image_BASE_URL}${field.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PDF
                      </a>
                    </div>
                  )}
                </Form.Group>

                <Button variant="danger" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="primary"
              onClick={() => append({ language: "", pdf: null })}
            >
              Add PDF
            </Button>
            <Button variant="primary" type="submit">
              {editIndex !== null ? "Update Policy" : "Add Policy"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PoliciesManager;
