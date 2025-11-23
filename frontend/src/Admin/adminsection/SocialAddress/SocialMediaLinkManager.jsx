import React, { useState, useEffect, useRef } from 'react';
import { Table, Form, Button, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import constants from '../../../services/constants';
import JoditEditor from 'jodit-react';  // This is the correct way to import JoditEditor
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const SocialMediaLinkManager = () => {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState({ order: '', name: '', url: '', description: '', image: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [currentLink, setCurrentLink] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const editor = useRef(null);
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
    // Fetch initial data from API
    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${constants.API_BASE_URL}social`);
            setLinks(response.data.socials);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const addLink = async () => {
        try {
            setLoading(true);
            await axios.post(`${constants.API_BASE_URL}social`, newLink);
            fetchLinks(); // Refresh the links after adding
            setNewLink({ order: '', name: '', url: '', description: '', image: '' });
            setShowModal(false);
            toast.success("Added successfully");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateLink = async () => {
        try {
            setLoading(true);
            await axios.put(`${constants.API_BASE_URL}social/${currentLink._id}`, currentLink);
            fetchLinks(); // Refresh the links after updating
            setIsEditing(false);
            setCurrentLink({});
            toast.success("Edited successfully");
            setShowModal(false);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddLink = () => {
        if (newLink.order.trim() && newLink.name.trim() && newLink.url.trim() && newLink.description.trim() && newLink.image) {
            addLink();
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleEditLink = (link) => {
        setIsEditing(true);
        setCurrentLink(link);
        setShowModal(true);
    };

    const handleUpdateLink = () => {
        if (
            currentLink.order.toString().trim() &&
            currentLink.name.trim() &&
            currentLink.url.trim() &&
            currentLink.description.trim()
        ) {
            updateLink();
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleDescriptionChange = (content) => {
        if (isEditing) {
            setCurrentLink({ ...currentLink, description: content });
        } else {
            setNewLink({ ...newLink, description: content });
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setIsEditing(false);
        setNewLink({ order: '', name: '', url: '', description: '', image: '' });
        setCurrentLink({});
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (isEditing) {
                setCurrentLink({ ...currentLink, image: reader.result });
            } else {
                setNewLink({ ...newLink, image: reader.result });
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleDeleteLink = (id) => {
        if (window.confirm('Are you sure you want to delete this link?')) {
           
        }
    };
   
    return (
        <div className="container">
                   <ToastContainer />
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add New Link
            </Button>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order</th>
                        <th>Name</th>
                        <th>URL</th>
                        {/* <th>Description</th> */}
                        {/* <th>Image</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {[...links].sort((a, b) => a.order - b.order).map((link, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{link.order}</td>
                            <td>{link.name}</td>
                            <td>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.url}
                                </a>
                            </td>
                            {/* <td>{link.description}</td> */}
                            {/* <td>
                                {link.image && <img src={link.image} alt={link.name} width="50" height="50" />}
                            </td> */}
                            <td>
                                <Button variant="warning" className="me-2" onClick={() => handleEditLink(link)}>
                                    <FaEdit />
                                </Button>
                                {userRole === "user" && (
                                <Button variant="danger" onClick={() => handleDeleteLink(link._id)}>
                                    <FaTrash />
                                </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Link' : 'Add New Link'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Order</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Order"
                            value={isEditing ? currentLink.order : newLink.order}
                            onChange={(e) => {
                                if (isEditing) {
                                    setCurrentLink({ ...currentLink, order: e.target.value });
                                } else {
                                    setNewLink({ ...newLink, order: e.target.value });
                                }
                            }}
                            className="mb-3"
                        />
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={isEditing ? currentLink.name : newLink.name}
                            onChange={(e) => {
                                if (isEditing) {
                                    setCurrentLink({ ...currentLink, name: e.target.value });
                                } else {
                                    setNewLink({ ...newLink, name: e.target.value });
                                }
                            }}
                            className="mb-3"
                        />
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="URL"
                            value={isEditing ? currentLink.url : newLink.url}
                            onChange={(e) => {
                                if (isEditing) {
                                    setCurrentLink({ ...currentLink, url: e.target.value });
                                } else {
                                    setNewLink({ ...newLink, url: e.target.value });
                                }
                            }}
                            className="mb-3"
                        />
                        <Form.Label>Description</Form.Label>
                        <JoditEditor
                            ref={editor}
                            value={isEditing ? currentLink.description : newLink.description}
                            onChange={handleDescriptionChange}
                            className="mb-3"
                        />
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="mb-3"
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={isEditing ? handleUpdateLink : handleAddLink}>
                        {isEditing ? 'Update Link' : 'Add Link'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SocialMediaLinkManager;
