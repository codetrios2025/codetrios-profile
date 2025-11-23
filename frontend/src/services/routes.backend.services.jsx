import axiosService from "./AxiosConfig";

// Home Page API
// Header API
export const getItem = (pageApi, config) => {
  //Hader Section
  return axiosService.get(`${pageApi}`, config);
};
export const createItem = (headerData) => {
  return axiosService.post(`header`, headerData);
};

// Example for PUT request
export const updateItem = (headerId, headerData) => {
  return axiosService.put(`header/${headerId}`, headerData);
};
// Example for Delete request
export const deleteItem = (headerId, headerData) => {
  return axiosService.delete(`header/${headerId}`, headerData);
};
