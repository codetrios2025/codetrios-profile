import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import {
  getAllJobs,
  deleteJob,
  updateJobStatus,
} from "../../../services/jobService";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import JobModal from "./JobModal";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

const JobList = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Assuming token is stored in `user.token`
    },
  };
    const userRole = useSelector((state) => state.auth.user?.role);
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null);
  const [jobToView, setJobToView] = useState(null);
  const [jobStatus, setJobStatus] = useState();
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10); // Set number of jobs per page

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      console.log("API Response:", response);
      if (Array.isArray(response.data.data)) {
        setJobs(response.data.data);
      } else {
        console.error("Expected an array but received:", response.data);
        setJobs([]);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    }
  };

  const handleClose = () => {
    setShowViewModal(false);
  };
  const handleAddJob = () => {
    setJobToEdit(null);
    setShowModal(true);
  };

  const handleEditJob = (job) => {
    setJobToEdit(job);
    setShowModal(true);
  };

  const handleViewJob = (job) => {
    setJobToView(job);
    setShowViewModal(true);
  };

  const handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await deleteJob(jobId);
      fetchJobs();
    }
  };

  const toggleStatus = async (JID) => {
    try {
      if (
        window.confirm("Are you sure you want to change status of this job?")
      ) {
        const response = await updateJobStatus(JID, config);
        setJobStatus(response.data.jobStatus);
        fetchJobs();
      }
    } catch (err) {
      setError("Failed to update status");
    }
  };

  const handleNavigate = (jobID, jID) => {
    navigate("/admin/job-applications", {
      state: { jobId: jobID, jobID: jID },
    });
  };

  // Search functionality
  const filteredJobs = jobs.filter((job) =>
    job.positionTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Button onClick={handleAddJob}>Add Job</Button>
        </div>
        <div className="col-md-6">
          {" "}
          <Form.Control
            type="text"
            placeholder="Search by Position Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-3 mb-3"
          />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Position Title</th>
            <th>Preferred Industry</th>
            <th>Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.length > 0 ? (
            currentJobs.map((job, i) => (
              <tr key={i}>
                <td>{job.positionTitle}</td>
                <td>{job.preferredIndustry}</td>
                <td>{job.location}</td>
                <td>{job.jobStatus}</td>
                <td>
                  <Button variant="primary" onClick={() => handleViewJob(job)}>
                    <FaEye />
                  </Button>{" "}
                  <Button variant="warning" onClick={() => handleEditJob(job)}>
                    <FaEdit />
                  </Button>{" "}
                  {userRole === "user" && (
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteJob(job._id)}
                  >
                    <FaTrash />
                  </Button>
                  )}
                  {" "}
                  <Button onClick={() => toggleStatus(job._id)}>
                    {job.jobStatus === "Active" ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleNavigate(job._id, job.jobId)}
                  >
                    Job Applications
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No jobs available</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination Buttons */}
      <div className="pagination">
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {"<"}
        </Button>
        {currentPage > 1 && (
          <Button onClick={() => handlePageChange(currentPage - 1)}>
            {currentPage - 1}
          </Button>
        )}
        <Button disabled>{currentPage}</Button>
        {currentPage < totalPages && (
          <Button onClick={() => handlePageChange(currentPage + 1)}>
            {currentPage + 1}
          </Button>
        )}
        <Button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {">"}
        </Button>
      </div>

      {/* Job Modal for both adding and editing */}
      <JobModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        fetchJobs={fetchJobs}
        jobToEdit={jobToEdit}
      />

      <Modal show={showViewModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Position Title : {jobToView && jobToView.positionTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {jobToView !== null ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Certifications</td>
                  <td>{parse(`${jobToView.certifications}`)}</td>
                </tr>
                <tr>
                  <td>Education</td>
                  <td>{jobToView.education}</td>
                </tr>
                <tr>
                  <td>Employment Type</td>
                  <td>{jobToView.employmentType}</td>
                </tr>
                <tr>
                  <td>Job ID</td>
                  <td>{jobToView.jobId}</td>
                </tr>
                <tr>
                  <td>Job Responsibilities</td>
                  <td>{parse(`${jobToView.jobResponsibilities}`)}</td>
                </tr>
                <tr>
                  <td>Job Status</td>
                  <td>{jobToView.jobStatus}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{jobToView.location}</td>
                </tr>
                <tr>
                  <td>Max Experience</td>
                  <td>{jobToView.maxExperience}</td>
                </tr>
                <tr>
                  <td>Max Salary</td>
                  <td>{jobToView.maxSalary}</td>
                </tr>
                <tr>
                  <td>Min Experience</td>
                  <td>{jobToView.minExperience}</td>
                </tr>
                <tr>
                  <td>Min Salary</td>
                  <td>{jobToView.minSalary}</td>
                </tr>
                <tr>
                  <td>Mode of Education</td>
                  <td>{jobToView.modeOfEducation}</td>
                </tr>
                <tr>
                  <td>Number of Vacancies</td>
                  <td>{jobToView.numberOfVacancies}</td>
                </tr>
                <tr>
                  <td>Posting End Date</td>
                  <td>{jobToView.postingEndDate}</td>
                </tr>
                <tr>
                  <td>Posting Start Date</td>
                  <td>{jobToView.postingStartDate}</td>
                </tr>
                <tr>
                  <td>Preferred Industry</td>
                  <td>{jobToView.preferredIndustry}</td>
                </tr>
                <tr>
                  <td>Qualification</td>
                  <td>{jobToView.qualification}</td>
                </tr>
                <tr>
                  <td>Work Experience</td>
                  <td>{jobToView.workExperience}</td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <p>No job details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobList;
