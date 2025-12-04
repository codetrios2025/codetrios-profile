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
import parse from "html-react-parser";
import axios from "axios";
import constants from "../../../services/constants";
import slugify from "slugify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const BlogManager = () => {
  const [allBlog, setAllBlog] = useState([]);
  const [show, setShow] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    authorpost: "",
    order: "",
    description: "",
    image: "",
    link: "",
    blogdate: "",
    description1: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const { token } = useSelector((state) => state.auth);
  

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
const userRole = useSelector((state) => state.auth.user?.role);
  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}blog`);
      setAllBlog(response.data.blog);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = () => {
    setShow(false);
    setNewBlog({
      title: "",
      author: "",
      authorpost: "",
      order: "",
      description: "",
      image: "",
      link: "",
      blogdate: "",
      description1: "",
    });
    setEditIndex(null);
    setImageFile(null);
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setNewBlog({ ...newBlog, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("author", newBlog.author);
    formData.append("authorpost", newBlog.authorpost);
    formData.append("order", newBlog.order);
    formData.append("description", newBlog.description);
    formData.append(
      "link",
      slugify(newBlog.title, { lower: true, strict: true })
    );
    formData.append("blogdate", newBlog.blogdate);
    formData.append("description1", newBlog.description1);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (editIndex !== null) {
        // Update blog
        await axios.put(
          `${constants.API_BASE_URL}blog/${editIndex._id}`,
          formData,
          config
        );
        const updatedBlogs = allBlog.map((blog) =>
          blog._id === editIndex._id
            ? { ...blog, ...newBlog, image: blog.image || newBlog.image }
            : blog
        );
        setAllBlog(updatedBlogs);
        toast.success("Edited successfully");

        setEditIndex(null);
      } else {
        // Add new Blog
        const response = await axios.post(
          `${constants.API_BASE_URL}blog`,
          formData,
          config
        );
        setAllBlog([...allBlog, response.data]);
        toast.success("Added successfully");
      }
      fetchLinks();
      handleClose();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      toast.error("There was an error submitting the form!");
    }
  };

  const handleEdit = (blog) => {
    const formattedBlog = {
      ...blog,
      blogdate: blog.blogdate
        ? new Date(blog.blogdate).toISOString().split("T")[0]
        : "",
    };
    setNewBlog(formattedBlog);
    setEditIndex(blog);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}blog/${id}`, config);
        const filteredItems = allBlog.filter((item) => item._id !== id);
        setAllBlog(filteredItems);
        toast.success("Deleted successfully");
        fetchLinks();
      } catch (error) {
        console.error("There was an error deleting the Blog!", error);
        toast.error("Error deleteing Item");
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlog.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlog.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col>
          <Button variant="primary" onClick={handleShow}>
            Add Blog
          </Button>
          <Row>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Author Post</th>
                  <th>Date</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBlogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td>{indexOfFirstBlog + index + 1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>{blog.authorpost}</td>
                    <td>{formatDate(blog.blogdate)}</td>
                    <td>
                      {blog.image && (
                        <img
                          src={`${constants.Image_BASE_URL}${blog.image}`}
                          alt="blog"
                          style={{ width: "100px" }}
                        />
                      )}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(blog)}
                      >
                        <FaEdit />
                      </Button>
                      {userRole === "user" && (
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(blog._id)}
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
          </Row>
          <Row>
            <Pagination className="mt-3">
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Row>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Edit Blog" : "Add Blog"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={newBlog.author}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author Post</Form.Label>
              <Form.Control
                type="text"
                name="authorpost"
                value={newBlog.authorpost}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Order</Form.Label>
              <Form.Control
                type="number"
                name="order"
                value={newBlog.order}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <ReactQuill
                value={newBlog.description}
                onChange={(value) =>
                  setNewBlog({ ...newBlog, description: value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="blogdate"
                value={newBlog.blogdate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description 2</Form.Label>
              <ReactQuill
                value={newBlog.description1}
                onChange={(value) =>
                  setNewBlog({ ...newBlog, description1: value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
              />
              {newBlog.image && (
                <img
                  src={`${constants.Image_BASE_URL}${newBlog.image}`}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{ width: "100px" }}
                />
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              {editIndex !== null ? "Update Blog" : "Add Blog"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default BlogManager;
