import React, { useState, useEffect } from 'react';
import { Button, Table,Modal ,Form} from 'react-bootstrap';
import { getAllJobsApplication, deleteJob } from '../../../services/jobService';
import { FaEdit, FaTrash,FaEye  } from 'react-icons/fa';
import JobModal from './JobModal';
import { Link, useLocation } from "react-router-dom";
import constants from '../../../services/constants';
import Style from '../Layout.module.css'

const JobApplicationList = () => {
  const location = useLocation();
  const { jobId,jobID } = location.state || {}; // Extract job from location state
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [jobToEdit, setJobToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobsPerPage] = useState(10); // Set number of jobs per page

  const limit = 10; 
  // useEffect(() => {
  //   fetchApplication();
  // }, []);

  // const fetchApplication = async () => {
  //   try {
  //     const response = await getAllJobsApplication(currentPage,limit,jobId);
        
  //     // Log the response to check its structure
  //     console.log('API Response:', response.data);

  //     // Ensure response.data is an array
  //     if (response.data) {
  //       setApplications(response.data.report);
  //       //setTotalPages(response.data.totalPages);
  //     } else {
  //       console.error('Expected an array but received:', response.data);
  //        setApplications([]); // Set to an empty array if not in expected format
  //     }
  //   } catch (error) {
  //     console.error('Error fetching jobs:', error);
  //     setApplications([]); // Set to an empty array in case of error
  //   }
  // };
  useEffect(() => {
    fetchApplication();
  }, [currentPage]); // Add currentPage as a dependency
  
  const fetchApplication = async () => {
    try {
      const response = await getAllJobsApplication(currentPage, limit, jobId);
  
      if (response.data) {
        setApplications(response.data.report || []);
        setTotalPages(Math.ceil(response.data.totalCount / limit)); // Adjust based on API response
      } else {
        console.error('Expected valid data but received:', response.data);
        setApplications([]);
        setTotalPages(1); // Default to 1 page
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setApplications([]);
      setTotalPages(1);
    
    }}
  const handleClose = () => { setShowViewModal(false); };
 
  const handleViewApplication = (app) => {
    setSelectedApplication(app); // Set the job to edit
    setShowViewModal(true);
  };

  const handleExportCSV = () => {
    window.location.href = `${constants.API_BASE_URL}application/export/${jobId}`;
  };
  const handleDownloadResume = (resumeFile) => {
    // const filePath = resumeFile;
    // const updatedFilePath = filePath.replace("uploads\\", "");
    // console.log(updatedFilePath)
    //window.location.href = `${constants.Image_BASE_URL}${updatedFilePath}`;
    window.open(`${constants.File_BASE_URL}${resumeFile}`, '_blank');
  };
  
   // Filter applications based on search term
   const filteredApplications = applications.filter((application) => {
    const fullName = `${application.personalDetails.firstName} ${application.personalDetails.lastName}`.toLowerCase();
    const email = application.contactDetails.emailId.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase());
  });

// Pagination logic
const indexOfLastJob = currentPage * jobsPerPage;
const indexOfFirstJob = indexOfLastJob - jobsPerPage;
const currentJobs = filteredApplications.slice(indexOfFirstJob, indexOfLastJob);
const totalPages1 = Math.ceil(filteredApplications.length / jobsPerPage);

 // Change page
 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

  return (
    <div className="container " style={{overflowX: 'scroll'}}>
       {console.log(applications)}
      {applications && applications.length !== 0 && <Button onClick={handleExportCSV}>Export Applications</Button>}
      <div className='row'>
      <div className='col-md-6'> 
      <h5>Applications for Job ID: {jobID}</h5>
      </div>
      <div className='col-md-6'> <Form.Control
        type="text"
        placeholder="Search by Position Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-3 mb-3"
      /></div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className={Style.jobApplicationTable} colSpan="3">Application Details</th>
            <th className={Style.jobApplicationTable}  colSpan="6">Personal Details</th>
            <th className={Style.jobApplicationTable} colSpan="3">Contact Details</th>
            <th className={Style.jobApplicationTable} colSpan="3">Education Details</th>
            <th className={Style.jobApplicationTable} colSpan="2">Professional Certification</th>
            <th className={Style.jobApplicationTable} colSpan="1">Experience</th>
            <th className={Style.jobApplicationTable} colSpan="2">CTC Details</th>
            <th className={Style.jobApplicationTable} rowSpan="2">Joining Time</th>
            <th className={Style.jobApplicationTable} rowSpan="2">Resume</th>
          </tr>
          {/* Second row: Specific headers */}
          <tr>
            {/* Application Details */}
            <th>MRF</th>
            <th>Preferred Industry</th>
            <th>Date Applied</th>

            {/* Personal Details */}
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Nationality</th>

            {/* Contact Details */}
            <th>Mobile No.</th>
            <th>Email ID</th>
            <th>Current Location</th>

            {/* Education Details */}
            <th>Relevant Qualification</th>
            <th>Specialization</th>
            <th>Mode</th>

            {/* Professional Certification */}
            <th>Certificate Name</th>
            <th>Validity</th>

            {/* Experience */}
            <th>Expertise (Years of Experience)</th>
            {/* <th>Years of Experience</th> */}

            {/* CTC Details */}
            <th>Current CTC</th>
            <th>Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {console.log(applications)}
        {applications && applications.length !== 0 ? (
            currentJobs.map((app, index) => (
              <tr key={index}>
                {/* Application Details */}
                {app.applicationDetails ?( <td>{app.applicationDetails.jobTitle}</td>):(<td>-</td>)}
                {app.applicationDetails ?(<td>{app.applicationDetails.preferredIndustry}</td>):(<td>-</td>)}
                {app.applicationDetails ?(<td>{new Date(app.dateOfSubmission).toLocaleDateString()}</td>):(<td>-</td>)}

                {/* Personal Details */}
                <td>{app.personalDetails.firstName}</td>
                <td>{app.personalDetails.middleName}</td>
                <td>{app.personalDetails.lastName}</td>
                <td>{new Date(app.personalDetails.dateOfBirth).toLocaleDateString()}</td>
                <td>{app.personalDetails.gender}</td>
                <td>{app.personalDetails.nationality}</td>

                {/* Contact Details */}
                <td>{app.contactDetails.mobileNo}</td>
                <td>{app.contactDetails.emailId}</td>
                <td>{app.contactDetails.currentLocation}</td>

                {/* Education Details */}
                {app.educationDetails.map((ed, edIndex) => (
                  <React.Fragment key={edIndex}>
                    <td>{ed.relevantQualification}</td>
                    <td>{ed.specialization}</td>
                    <td>{ed.mode}</td>
                  </React.Fragment>
                ))}

                {/* Professional Certification */}
                {app.professionalCertifications.map((cert, certIndex) => (
                  <React.Fragment key={certIndex}>
                    <td>{cert.certificateName}</td>
                    <td>{cert.validity}</td>
                  </React.Fragment>
                ))}

                {/* Experience */}
                {/* {app.experience.map((exp, expIndex) => (
                  <React.Fragment key={expIndex}>
                    <td>{exp.expertise}</td>
                    <td>{exp.yearsOfExperience}</td>
                  </React.Fragment>
                ))} */}
{/* Experience */}
<td>
  {app.experience.map((exp, expIndex) => (
     <React.Fragment key={expIndex}>
    <span key={expIndex}>
      {exp.expertise} ({exp.yearsOfExperience} years)
      {expIndex !== app.experience.length - 1 && ", "} {/* Add a comma between entries */}
    </span>
    </React.Fragment>
  ))}
</td>
                {/* CTC Details */}
                <td>{app.ctcDetails.currentCTC}</td>
                <td>{app.ctcDetails.netSalary}</td>

                {/* Joining Time */}
                <td>{app.joiningTime}</td>

                {/* Resume */}
                <td>
                {app.resume ? (
                <Button onClick={() => handleDownloadResume(app.resume)}>Download Resume</Button>
                ) : (
                    'No resume uploaded'
                )}

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="21">No data available</td>
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
          {'<'}
        </Button>
        {currentPage > 1 && (
          <Button onClick={() => handlePageChange(currentPage - 1)}>
            {currentPage - 1}
          </Button>
        )}
        <Button disabled>{currentPage}</Button>
        {currentPage < totalPages1 && (
          <Button onClick={() => handlePageChange(currentPage + 1)}>
            {currentPage + 1}
          </Button>
        )}
        <Button
          disabled={currentPage === totalPages1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {'>'}
        </Button>
      </div>
     


     <Modal show={showViewModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Application for Job ID  : {selectedApplication && jobID}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {selectedApplication && (
            <div>
              <h5>Personal Details</h5>
              <p><strong>Name:</strong> {`${selectedApplication.personalDetails.firstName} ${selectedApplication.personalDetails.lastName}`}</p>
              <p><strong>Date of Birth:</strong> {new Date(selectedApplication.personalDetails.dateOfBirth).toLocaleDateString()}</p>
              <p><strong>Gender:</strong> {selectedApplication.personalDetails.gender}</p>
              <p><strong>Nationality:</strong> {selectedApplication.personalDetails.nationality}</p>

              <h5>Contact Details</h5>
              <p><strong>Mobile:</strong> {selectedApplication.contactDetails.mobileNo}</p>
              <p><strong>Email:</strong> {selectedApplication.contactDetails.emailId}</p>
              <p><strong>Location:</strong> {selectedApplication.contactDetails.currentLocation}</p>

              <h5>Education</h5>
              <ul>
                {selectedApplication.educationDetails.map((edu, index) => (
                  <li key={index}>{`${edu.relevantQualification} in ${edu.specialization} (${edu.mode})`}</li>
                ))}
              </ul>

              <h5>Experience</h5>
              <ul>
                {selectedApplication.experience.map((exp, index) => (
                  <li key={index}>{`${exp.expertise} (${exp.yearsOfExperience} years)`}</li>
                ))}
              </ul>

              <h5>Certifications</h5>
              <ul>
                {selectedApplication.professionalCertifications.map((cert, index) => (
                  <li key={index}>{`${cert.certificateName} (Valid until ${new Date(cert.validity).toLocaleDateString()})`}</li>
                ))}
              </ul>

              <h5>CTC Details</h5>
              <p><strong>Current CTC:</strong> {selectedApplication.ctcDetails.currentCTC}</p>
              <p><strong>Net Salary:</strong> {selectedApplication.ctcDetails.netSalary}</p>

              <h5>Other Details</h5>
              <p><strong>Joining Time:</strong> {selectedApplication.joiningTime}</p>

              <p>
              {selectedApplication.resume ? (
                <Button onClick={() => handleDownloadResume(selectedApplication.resume)}>Download Resume</Button>
            ) : (
                'No resume uploaded'
            )}
             
              </p>
            </div>
            
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

export default JobApplicationList;
