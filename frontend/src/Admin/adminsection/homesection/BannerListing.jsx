import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getItem } from "../../../services/routes.backend.services";
import constants from "../../../services/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const BannerListing = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [banners, setBanners] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editBanner, setEditBanner] = useState(null);
  const [bannerText, setBannerText] = useState("");
  const [bannerLink, setBannerLink] = useState("");
  const [bannerOrder, setBannerOrder] = useState("");
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await getItem("banners");
      setBanners(response.data.banners);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const handleBannerSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", bannerText);
    formData.append("link", bannerLink);
    formData.append("bannerOrder", bannerOrder);
    if (bannerImage) {
      formData.append("bannerImage", bannerImage);
    }

    try {
      if (editBanner) {
        await axios.put(
          `${constants.API_BASE_URL}banners/${editBanner._id}`,
          formData,
          config
        );
      } else {
        await axios.post(`${constants.API_BASE_URL}banners`, formData, config);
      }
      toast.success(" success");
      fetchBanners();
      setShowModal(false);
      resetFormFields();
    } catch (error) {
      console.error("Error saving banner:", error);
      toast.error("There was an error !");
    }
  };

  const handleAdd = () => {
    setEditBanner(null);
    resetFormFields();
    setShowModal(true);
  };

  const handleEdit = (banner) => {
    setEditBanner(banner);
    setBannerText(banner.title);
    setBannerLink(banner.link);
    setBannerOrder(banner.order);
    setBannerImage(null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}banners/${id}`, config);
        toast.success("Deleted successfully");
        fetchBanners();
      } catch (error) {
        console.error("Error deleting banner:", error);
        toast.error("There was an error !");
      }
    }
  };

  const handleToggleActive = async (id) => {
    const banner = banners.find((b) => b.id === id);
    const updatedBanner = { ...banner, isActive: !banner.isActive };
    try {
      await axios.put(`${constants.API_BASE_URL}banners/${id}`, updatedBanner);
      fetchBanners();
    } catch (error) {
      console.error("Error updating banner status:", error);
    }
  };

  const resetFormFields = () => {
    setBannerText("");
    setBannerLink("");
    setBannerOrder("");
    setBannerImage(null);
  };

  return (
    <div className="container">
      <ToastContainer />
      <Button variant="primary" onClick={handleAdd}>
        Add Banner
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Link</th>
            {/* <th>Status</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {banners.map((banner, i) => (
            <tr key={banner._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={`${constants.Image_BASE_URL}${banner.bannerImage}`}
                  alt={banner.text}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{banner.title}</td>
              <td>{banner.link}</td>
              {/* <td>
                                <Button
                                    variant={banner.isActive ? 'success' : 'secondary'}
                                    onClick={() => handleToggleActive(banner._id)}
                                >
                                    {banner.isActive ? 'Active' : 'Inactive'}
                                </Button>
                            </td> */}
              <td>
                <Button variant="warning" onClick={() => handleEdit(banner)}>
                  {" "}
                  <FaEdit />
                </Button>
                {userRole === "user" && (
                <Button
                  variant="danger"
                  onClick={() => handleDelete(banner._id)}
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editBanner ? "Edit Banner" : "Add Banner"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBannerSubmit}>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>File input </Form.Label>
              <Form.Control
                type="file"
                size="sm"
                onChange={(e) => setBannerImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Banner Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter banner text"
                value={bannerText}
                onChange={(e) => setBannerText(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Banner Link </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter banner link"
                value={bannerLink}
                onChange={(e) => setBannerLink(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Order Number </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Order Number"
                value={bannerOrder}
                onChange={(e) => setBannerOrder(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" block>
              {editBanner ? "Update Banner" : "Create Banner"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BannerListing;
