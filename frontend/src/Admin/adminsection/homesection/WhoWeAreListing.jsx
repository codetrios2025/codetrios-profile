import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import parse from "html-react-parser";
import constants from "../../../services/constants";
import { getItem } from "../../../services/routes.backend.services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; // Import Quill CSS
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  text: yup.string().required("Title is required"),
  link: yup.string().required("Invalid URL format"),
  description: yup.string().required("Description is required"),
  order: yup.number().required("Order number is required").positive().integer(),
  fields: yup.array().of(
    yup.object().shape({
      field1: yup.string().required("Field 1 is required"),
      field2: yup.string().required("Field 2 is required"),
    })
  ),
});

const WhoWeAreListing = () => {
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
  const userRole = useSelector((state) => state.auth.user?.role);
  const [whoWeAres, setWhoWeAres] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editWhoWeAre, setEditWhoWeAre] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
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
      const response = await getItem("whoweare");
      // const response = await axios.get(`${ constants.API_BASE_URL}whoweare`);
      setWhoWeAres(response.data.whoweare);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleWhoWeAreSubmit = async (data) => {
    const newWhoWeAre = {
      _id: editWhoWeAre ? editWhoWeAre._id : whoWeAres.length + 1,
      ...data,
    };

    if (editWhoWeAre) {
      setWhoWeAres(
        whoWeAres.map((WhoWeAre) =>
          WhoWeAre._id === editWhoWeAre._id ? newWhoWeAre : WhoWeAre
        )
      );
    } else {
      setWhoWeAres([...whoWeAres, newWhoWeAre]);
    }

    try {
      if (editWhoWeAre) {
        await axios.put(
          `${constants.API_BASE_URL}whoweare/${editWhoWeAre._id}`,
          newWhoWeAre,
          config
        );
        toast.success("Edited successfully");
      } else {
        await axios.post(
          `${constants.API_BASE_URL}whoweare`,
          newWhoWeAre,
          config
        );
        toast.success("Added successfully");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }

    setShowModal(false);
    resetFormFields();
  };

  const handleAdd = () => {
    setEditWhoWeAre(null);
    resetFormFields();
    setShowModal(true);
  };

  const handleEdit = (WhoWeAre) => {
    setEditWhoWeAre(WhoWeAre);
    reset(WhoWeAre);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    setWhoWeAres(whoWeAres.filter((WhoWeAre) => WhoWeAre.id !== id));
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${constants.API_BASE_URL}whoweare/${id}`, config);
        toast.success("Deleted successfully");
        fetchLinks();
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const resetFormFields = () => {
    reset();
  };

  return (
    <div className="container">
      <ToastContainer />
      <Button variant="primary" onClick={handleAdd}>
        Add About Us
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {whoWeAres.map((WhoWeAre, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{WhoWeAre.text}</td>
              <td>{parse(`${WhoWeAre.description}`)}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(WhoWeAre)}>
                  {" "}
                  <FaEdit />
                </Button>
                {userRole === "user" && (
                <Button
                  variant="danger"
                  onClick={() => handleDelete(WhoWeAre._id)}
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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editWhoWeAre ? "Edit Who We Are" : "Add Who We Are"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleWhoWeAreSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Who We Are Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Who We Are text"
                {...register("text")}
                isInvalid={errors.text}
              />
              <Form.Control.Feedback type="invalid">
                {errors.text?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Who We Are Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Who We Are link"
                {...register("link")}
                isInvalid={errors.link}
              />
              <Form.Control.Feedback type="invalid">
                {errors.link?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Who We Are Description</Form.Label>
              {/* <Form.Control
                                as="textarea"
                                rows={3}
                                {...register('description')}
                                isInvalid={errors.description}
                            /> */}
              <ReactQuill
                theme="snow"
                onChange={(content) => setValue("description", content)}
                value={editWhoWeAre ? editWhoWeAre.description : ""}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Order Number"
                {...register("order")}
                isInvalid={errors.order}
              />
              <Form.Control.Feedback type="invalid">
                {errors.order?.message}
              </Form.Control.Feedback>
            </Form.Group>

            {fields.map((field, index) => (
              <div key={field.id} className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Field 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Field 1"
                    {...register(`fields.${index}.field1`)}
                    isInvalid={errors.fields?.[index]?.field1}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fields?.[index]?.field1?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Field 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Field 2"
                    {...register(`fields.${index}.field2`)}
                    isInvalid={errors.fields?.[index]?.field2}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fields?.[index]?.field2?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="danger" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}

            <Button
              variant="primary"
              onClick={() => append({ field1: "", field2: "" })}
            >
              Add Field
            </Button>

            <Button type="submit" variant="primary" block className="mt-3">
              {editWhoWeAre ? "Update Who We Are" : "Create Who We Are"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WhoWeAreListing;
