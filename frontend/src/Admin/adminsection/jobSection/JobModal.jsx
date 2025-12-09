import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createJob, updateJob } from "../../../services/jobService"; // Replace with actual service paths
import { toast } from "react-toastify";
import ReactQuill from "react-quill-new";
import { useSelector } from "react-redux";
import store from "../../../store/store";

const JobModal = ({ show, handleClose, fetchJobs, jobToEdit }) => {
  const state = store.getState(); // Get the current state
  console.log(state);
  //const token = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };

  // Initialize state with job fields
  const [formData, setFormData] = useState({
    positionTitle: "",
    preferredIndustry: "",
    location: "",
    numberOfVacancies: "",
    employmentType: "",
    minSalary: "",
    maxSalary: "",
    education: "",
    qualification: "",
    modeOfEducation: "",
    specialization: "",
    minExperience: "",
    maxExperience: "",
    certifications: "",
    jobResponsibilities: "",
    postingStartDate: "",
    postingEndDate: "",
  });

  // Use effect to populate form data if editing
  useEffect(() => {
    if (jobToEdit) {
      setFormData({
        jobId: jobToEdit.jobId || "",
        positionTitle: jobToEdit.positionTitle || "",
        preferredIndustry: jobToEdit.preferredIndustry || "",
        location: jobToEdit.location || "",
        numberOfVacancies: jobToEdit.numberOfVacancies || "",
        employmentType: jobToEdit.employmentType || "",
        minSalary: jobToEdit.minSalary || "",
        maxSalary: jobToEdit.maxSalary || "",
        education: jobToEdit.education || "",
        qualification: jobToEdit.qualification || "",
        modeOfEducation: jobToEdit.modeOfEducation || "",
        specialization: jobToEdit.specialization || "",
        minExperience: jobToEdit.minExperience || "",
        maxExperience: jobToEdit.maxExperience || "",
        certifications: jobToEdit.certifications || "",
        jobResponsibilities: jobToEdit.jobResponsibilities || "",
        expDetail: jobToEdit.expDetail || "",
        requirments: jobToEdit.requirments || "",
        postingStartDate: jobToEdit.postingStartDate
          ? jobToEdit.postingStartDate.slice(0, 10)
          : "", // Format for input type date
        postingEndDate: jobToEdit.postingEndDate
          ? jobToEdit.postingEndDate.slice(0, 10)
          : "",
      });
    } else {
      setFormData({
        jobId: "",
        positionTitle: "",
        preferredIndustry: "",
        location: "",
        numberOfVacancies: "",
        employmentType: "",
        minSalary: "",
        maxSalary: "",
        education: "",
        qualification: "",
        modeOfEducation: "",
        specialization: "",
        minExperience: "",
        maxExperience: "",
        certifications: "",
        jobResponsibilities: "",
        expDetail: "",
        requirments: "",
        postingStartDate: "",
        postingEndDate: "",
      });
    }
  }, [jobToEdit]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (jobToEdit) {
        // Update existing job
        await updateJob(jobToEdit._id, formData, config);
        setFormData({
          jobId: "",
          positionTitle: "",
          preferredIndustry: "",
          location: "",
          numberOfVacancies: "",
          employmentType: "",
          minSalary: "",
          maxSalary: "",
          education: "",
          qualification: "",
          modeOfEducation: "",
          specialization: "",
          minExperience: "",
          maxExperience: "",
          certifications: "",
          jobResponsibilities: "",
          expDetail: "",
          requirments: "",
          postingStartDate: "",
          postingEndDate: "",
        });
        toast.success("Job updated successfully!");
      } else {
        // Add new job
        await createJob(formData, config);
        setFormData({
          jobId: "",
          positionTitle: "",
          preferredIndustry: "",
          location: "",
          numberOfVacancies: "",
          employmentType: "",
          minSalary: "",
          maxSalary: "",
          education: "",
          qualification: "",
          modeOfEducation: "",
          specialization: "",
          expDetail: "",
          requirments: "",
          minExperience: "",
          maxExperience: "",
          certifications: "",
          jobResponsibilities: "",
          postingStartDate: "",
          postingEndDate: "",
        });
        toast.success("Job created successfully!");
      }
      fetchJobs(); // Refresh the job list
      handleClose(); // Close the modal
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Error saving job. Please try again."); // Simple error handling
    }
  };

  const handleQuill1Change = (value) => {
    setFormData({ ...formData, jobResponsibilities: value });
  };
  const handleQuill2Change = (value) => {
    setFormData({ ...formData, expDetail: value });
  };
  const handleQuill3Change = (value) => {
    setFormData({ ...formData, requirments: value });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{jobToEdit ? "Edit Job" : "Add Job"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <Form.Group controlId="jobId">
            <Form.Label>Job ID</Form.Label>
            <Form.Control
              type="text"
              name="jobId"
              value={formData.jobId}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="positionTitle">
            <Form.Label>Position Title</Form.Label>
            <Form.Control
              type="text"
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="preferredIndustry">
            <Form.Label>Preferred Industry</Form.Label>
            <Form.Control
              type="text"
              name="preferredIndustry"
              value={formData.preferredIndustry}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="numberOfVacancies">
            <Form.Label>Number of Vacancies</Form.Label>
            <Form.Control
              type="number"
              name="numberOfVacancies"
              value={formData.numberOfVacancies}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="employmentType">
            <Form.Label>Employment Type</Form.Label>
            <Form.Control
              as="select"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Full Time Outsourced">Full Time Outsourced</option>
              <option value="Full Time ConsultantEmpanel/Freelancer/Man Day">
                Empanel/Freelancer/Man Day
              </option>
              <option value="Fixed Term Contract">Fixed Term Contract</option>
              <option value="Permanent">Permanent</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="minSalary">
            <Form.Label>Minimum Salary</Form.Label>
            <Form.Control
              type="number"
              name="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="maxSalary">
            <Form.Label>Maximum Salary</Form.Label>
            <Form.Control
              type="number"
              name="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="education">
            <Form.Label>Education</Form.Label>
            <Form.Control
              as="select"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
              <option value="Diploma">Diploma</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="qualification">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="modeOfEducation">
            <Form.Label>Mode of Education</Form.Label>
            <Form.Control
              as="select"
              name="modeOfEducation"
              value={formData.modeOfEducation}
              onChange={handleChange}
            >
              <option value="">Select Mode</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Distance">Distance</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="specialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="minExperience">
            <Form.Label>Minimum Experience (years)</Form.Label>
            <Form.Control
              type="number"
              name="minExperience"
              value={formData.minExperience}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="maxExperience">
            <Form.Label>Maximum Experience (years)</Form.Label>
            <Form.Control
              type="number"
              name="maxExperience"
              value={formData.maxExperience}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="certifications">
            <Form.Label>Certifications</Form.Label>
            <Form.Control
              type="text"
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="jobResponsibilities">
            <Form.Label>Job Responsibilities</Form.Label>
            {/* <Form.Control
              as="textarea"
              name="jobResponsibilities"
              value={formData.jobResponsibilities}
              onChange={handleChange}
              required
            /> */}
            <ReactQuill
              value={formData.jobResponsibilities}
              onChange={handleQuill1Change}
            />
          </Form.Group>
          <Form.Group controlId="requirments">
            <Form.Label>Requirements</Form.Label>
            <ReactQuill
              value={formData.requirments}
              onChange={handleQuill3Change}
            />
          </Form.Group>
          <Form.Group controlId="expDetail">
            <Form.Label>Experience Detail</Form.Label>
            <ReactQuill
              value={formData.expDetail}
              onChange={handleQuill2Change}
            />
          </Form.Group>
          <Form.Group controlId="postingStartDate">
            <Form.Label>Posting Start Date</Form.Label>
            <Form.Control
              type="date"
              name="postingStartDate"
              value={formData.postingStartDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="postingEndDate">
            <Form.Label>Posting End Date</Form.Label>
            <Form.Control
              type="date"
              name="postingEndDate"
              value={formData.postingEndDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {jobToEdit ? "Update Job" : "Add Job"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default JobModal;
