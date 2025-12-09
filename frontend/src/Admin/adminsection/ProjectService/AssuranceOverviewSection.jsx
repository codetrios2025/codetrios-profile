import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray,Controller } from 'react-hook-form';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import constants from '../../../services/constants';
import ReactQuill from 'react-quill-new';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS
import { getItem } from '../../../services/routes.backend.services';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const schema = yup.object().shape({
    text: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    order: yup.number().required('Order number is required').positive().integer(),
    fields: yup.array().of(
        yup.object().shape({
            field1: yup.string().required('Field 1 is required'),
            field2: yup.string().required('Field 2 is required'),
            field3: yup.string().required('Field 3 is required'),
            order: yup.number().required('Order is required').positive().integer(),
        })
    ),
});

const AssuranceOverviewSection = () => {
    const [assurances, setassurances] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editassurance, setEditassurance] = useState(null);
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields'
    });
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
            const response = await getItem('assurance');
            setassurances(response.data.assuranceOverview);
        } catch (error) {
            console.log(error.message);
        } 
    };

    const handleassuranceSubmit = async (data) => {
        const formData = new FormData();

        formData.append('text', data.text);
        formData.append('description', data.description);
        formData.append('order', data.order);

        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        data.fields.forEach((field, index) => {
            formData.append(`fields[${index}][field1]`, field.field1);
            formData.append(`fields[${index}][field2]`, field.field2);
            formData.append(`fields[${index}][field3]`, field.field3);
            formData.append(`fields[${index}][order]`, field.order);
        });

        try {
            if (editassurance) {
                await axios.put(`${constants.API_BASE_URL}assurance/${editassurance._id}`, formData);
                fetchLinks();
                toast.success("Edited successfully");
            } else {
                await axios.post(`${constants.API_BASE_URL}assurance`, formData);
                fetchLinks();
                toast.success("Added successfully");
            }
        } catch (error) {
            console.error("There was an error!", error);
            toast.error("There was an error !");
        }

        setShowModal(false);
        resetFormFields();
    };

    const handleAdd = () => {
        setEditassurance(null);
        resetFormFields();
        setShowModal(true);
    };

    const handleEdit = (assurance) => {
        setEditassurance(assurance);
        reset(assurance);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        setassurances(assurances.filter(assurance => assurance._id !== id));
        if (window.confirm('Are you sure you want to delete this record?')) {
        try {
            await axios.delete(`${constants.API_BASE_URL}assurance/${id}`);
            fetchLinks();
            toast.success("Deleted successfully");
        } catch (error) {
            console.error("There was an error!", error);
            toast.error("There was an error !");
        }
    }
    };

    const resetFormFields = () => {
        reset();
    };

    return (
        <div className="container">
                   <ToastContainer />
            <Button variant="primary" onClick={handleAdd}>Add Assurance</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assurances.map(assurance => (
                        <tr key={assurance._id}>
                            <td>{assurance.text}</td>
                            <td>{assurance.description}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(assurance)}><FaEdit /></Button>
                                {userRole === "user" && (
                                <Button variant="danger" onClick={() => handleDelete(assurance._id)} className="ml-2"><FaTrash /></Button>
)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editassurance ? 'Edit Assurance' : 'Add Assurance'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleassuranceSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Overview Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Overview text"
                                {...register('text')}
                                isInvalid={!!errors.text}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.text?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Overview Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                {...register('image')}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.image?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Overview Description</Form.Label>
                            {/* <Form.Control
                                as="textarea"
                                rows={3}
                                {...register('description')}
                                isInvalid={!!errors.description}
                            /> */}
                             <Controller
                                name="description"
                                control={control}
                                render={({ field }) => <ReactQuill {...field} />}
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
                                {...register('order')}
                                isInvalid={!!errors.order}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.order?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {fields.map((field, index) => (
                            <div key={field.id} className="mb-3">
                                 <hr className="text-success"/>
                                   {field.field3 && <h6 className="text-success">Section : {field.field3} </h6>}
                                <Form.Group className="mb-3">
                                    <Form.Label>Field 1</Form.Label>
                                    
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Field 1"
                                        {...register(`fields.${index}.field1`)}
                                        isInvalid={!!errors.fields?.[index]?.field1}
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
                                        isInvalid={!!errors.fields?.[index]?.field2}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.fields?.[index]?.field2?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                    <Form.Label>Field 3</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Field 3"
                                        {...register(`fields.${index}.field3`)}
                                        isInvalid={!!errors.fields?.[index]?.field3}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.fields?.[index]?.field3?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Order</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Order"
                                        {...register(`fields.${index}.order`)}
                                        isInvalid={!!errors.fields?.[index]?.order}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.fields?.[index]?.order?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="danger" onClick={() => remove(index)}>
                                    Remove
                                </Button>
                            </div>
                        ))}

                        <Button variant="primary" onClick={() => append({ field1: '', field2: '', field3: '', order: '' })}>
                            Add Field
                        </Button>

                        <Button type="submit" variant="primary" block className="mt-3">
                            {editassurance ? 'Update Assurance' : 'Create Assurance'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AssuranceOverviewSection;

