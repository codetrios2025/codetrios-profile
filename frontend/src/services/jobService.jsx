import axios from "axios";
import constants from "./constants";

// Fetch all jobs
export const getAllJobs = (currentPage, limit) => {
  return axios.get(`${constants.API_BASE_URL}jobs`, {
    params: { page: currentPage, limit },
  });
};

// Create a new job
export const createJob = (jobData, config) => {
  return axios.post(`${constants.API_BASE_URL}jobs`, jobData, config);
};

// Update an existing job
export const updateJob = (jobId, jobData, config) => {
  return axios.put(`${constants.API_BASE_URL}jobs/${jobId}`, jobData, config);
};

export const updateJobStatus = (jobId, config) => {
  return axios.patch(`${constants.API_BASE_URL}jobs/status/${jobId}`, config);
};

// Delete a job
export const deleteJob = (jobId) => {
  return axios.delete(`${constants.API_BASE_URL}jobs/${jobId}`);
};

// Get Role
export const getRoleArray = () => {
  return axios.get(`${constants.API_BASE_URL}jobs/role`);
};

// Get Role
export const getLocationArray = () => {
  return axios.get(`${constants.API_BASE_URL}jobs/location`);
};

// Get Role
export const getSpecialisationArray = () => {
  return axios.get(`${constants.API_BASE_URL}jobs/skill`);
};

export const getAllJobsApplication = (currentPage, limit, jobId) => {
  return axios.get(`${constants.API_BASE_URL}application/${jobId}`, {
    params: { page: currentPage, limit },
  });
};
