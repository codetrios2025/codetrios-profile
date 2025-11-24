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
import { useForm, useFieldArray } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import slugify from "slugify";
import constants from "../../../services/constants";
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

const DownloadManager = () => {
  const [allPolicies, setAllPolicies] = useState([]);
  const [allDownloadTypes, setAllDownloadTypes] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const policiesPerPage = 5;
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
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
      downloadtype:"",
      title: "",
      order: "",
      pageType: "", // Changed from description to pageType
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
    fetchDownloadType();
  }, []);
const fetchDownloadType =async()=>{
  try{
    const response=await axios.get(`${constants.API_BASE_URL}fooddownloadtypes`);
    setAllDownloadTypes(response.data.DownloadTypes)
  }
  catch (error) {
    console.log(error.message);
  }
};
  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}fooddownloads`);
      const policiesWithSize = await Promise.all(
        response.data.downloads.map(async (download) => {
          if (download.pdf) {
            const response = await fetch(
              `${constants.Image_BASE_URL}${download.pdf}`
            );
            const blob = await response.blob();
            return { ...download, pdfSize: blob.size };
          }
          return { ...download, pdfSize: null };
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
    formData.append("pageType", data.pageType); // Changed from description to pageType
    formData.append("downloadtype", data.downloadtype); // Changed from description to pageType
    formData.append("link", slugify(data.title, { lower: true, strict: true }));
    formData.append("policydate", data.policydate);

    data.fields.forEach((field, index) => {
      formData.append(`pdfs[${index}][language]`, field.language);
      if (field.pdf && field.pdf[0]) {
        formData.append(`pdfs[${index}][pdf]`, field.pdf[0]);
      }
    });

    try {
      if (editIndex !== null) {
        await axios.put(
          `${constants.API_BASE_URL}fooddownloads/${editIndex._id}`,
          formData,
          config
        );
        const updatedPolicies = allPolicies.map((download) =>
          download._id === editIndex._id ? { ...download, ...data } : download
        );
        setAllPolicies(updatedPolicies);
        setEditIndex(null);
        fetchLinks();
        toast.success("Update successfully");
      } else {
        const response = await axios.post(
          `${constants.API_BASE_URL}fooddownloads`,
          formData,
          config
        );
        setAllPolicies([...allPolicies, response.data]);
        toast.success("Added successfully");
        fetchLinks();
      }
      fetchLinks();
      handleClose();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error submitting the form!");
    }
  };

  const handleEdit = (download) => {
    const formatteddownload = {
      ...download,
      policydate: download.policydate
        ? new Date(download.policydate).toISOString().split("T")[0]
        : "",
    };

    reset({
      ...formatteddownload,
      fields: download.fields
        ? download.fields.map((field) => ({
            ...field,
            pdf: [{ name: field.pdf, preview: `${constants.Image_BASE_URL}${field.pdf}` }],
          }))
        : [{ language: "", pdf: null }],
    });
  

    setEditIndex(download);
    handleShow();

  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}fooddownloads/${id}`, config);
        const filteredItems = allPolicies.filter((item) => item._id !== id);
        setAllPolicies(filteredItems);
        toast.success("Deleted successfully");
        fetchLinks();
      } catch (error) {
        console.error("There was an error deleting the download!", error);
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
  let filteredPolicies = allPolicies;
  if(searchTerm !=''){
   filteredPolicies = allPolicies
    .filter(
      (policy) => policy.title.toLowerCase().includes(searchTerm.toLowerCase()) // Assuming policies have a 'title' property
    )
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically
  }
  // Pagination logic
  const indexOfLastDownload = currentPage * policiesPerPage;
  const indexOfFirstDownload = indexOfLastDownload - policiesPerPage;
  const currentPolicies = filteredPolicies.slice(
    indexOfFirstDownload,
    indexOfLastDownload
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Pagination logic
  // const indexOfLastDownload = currentPage * policiesPerPage;
  // const indexOfFirstDownload = indexOfLastDownload - policiesPerPage;
  // const currentPolicies = allPolicies.slice(indexOfFirstDownload, indexOfLastDownload);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <Button variant="primary" onClick={handleShow}>
            Add Download
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
                <th>Page Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPolicies.map((download, index) => (
                <tr key={download._id}>
                  <td>{indexOfFirstDownload + index + 1}</td>
                  <td>{download.title}</td>
                  {/* <td>{download.pageType}</td> */}
                   <td> {download.pageType==="Downloads"? " Assurance Download":download.pageType} </td>
                  <td>{formatDate(download.policydate)}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(download)}
                    >
                      <FaEdit />
                    </Button>
                     {userRole === "user" && (
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(download._id)}
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
            {editIndex !== null ? "Edit Download" : "Add Download"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
            <Form.Group>
              <Form.Label>Download Type</Form.Label>
              {allDownloadTypes &&
              <Form.Control as="select" {...register("downloadtype")} required>
               <option value="">Select Type</option>
                {allDownloadTypes.map((type, index) => (
                  <option key={type.title} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </Form.Control>
              }
            </Form.Group>
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
                    required
                  /> */}
                      <Form.Control
                      type="file"
                      {...register(`fields.${index}.pdf`, {
                        validate: (value) => {
                          // Allow file to be empty if editing and no new file is selected
                          if (editIndex !== null && !value?.[0]) {
                            return true;
                          }
                          // Require file for new entries
                          return value?.[0] !== undefined || "Please select a file.";
                        },
                      })}
                    />
                    {field.pdf && field.pdf[0]?.preview && (
                    <div className="mt-2">
                      <a
                        href={field.pdf[0]?.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Existing PDF
                      </a>
                    </div>
                  )}
                </Form.Group>
                <Button
                  variant="danger"
                  onClick={() => remove(index)}
                  className="mt-2"
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="secondary"
              onClick={() => append({ language: "", pdf: null })}
            >
              Add Language PDF
            </Button>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                {editIndex !== null ? "Update Download" : "Add Download"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DownloadManager;
