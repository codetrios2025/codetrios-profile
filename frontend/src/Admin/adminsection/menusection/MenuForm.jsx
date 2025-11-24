import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Style from "../../adminstyle/FormStyle.module.css";

const MenuForm = ({ onAddItem, onCancel }) => {
    const [parentTab, setParentTab] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [linkText, setLinkText] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            parentTab,
            orderNumber,
            linkUrl,
            linkText,
            description
        };
        onAddItem(newItem);
        resetForm();
    };

    const resetForm = () => {
        setParentTab('');
        setOrderNumber('');
        setLinkUrl('');
        setLinkText('');
        setDescription('');
    };

    return (
        <div className={Style.headerForm}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="parent-tab">
                    <Form.Label>Parent Menu Text:</Form.Label>
                    <Form.Control
                        as="select"
                        value={parentTab}
                        onChange={(e) => setParentTab(e.target.value)}
                        className={Style.Selectdropdown}
                    >
                        <option value="">Select Parent Tab</option>
                        <option value="parent1">Parent45415 1</option>
                        <option value="parent2">Parent 2</option>
                        <option value="parent3">Parent 3</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="link-text">
                    <Form.Label>Link Text:</Form.Label>
                    <Form.Control
                        type="text"
                        value={linkText}
                        onChange={(e) => setLinkText(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="link-url">
                    <Form.Label>Link URL:</Form.Label>
                    <Form.Control
                        type="url"
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        placeholder="https://example.com"
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={Style.Selectdropdown}
                    />
                </Form.Group>

                <Form.Group controlId="order-number">
                    <Form.Label>Order Number:</Form.Label>
                    <Form.Control
                        type="text"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="success" type="submit">
                    Create Menu
                </Button>
                <Button variant="primary" onClick={onCancel}>
                    Cancel
                </Button>
            </Form>
        </div>
    );
};

export default MenuForm;
