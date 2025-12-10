import axiosService from "./AxiosConfig";

// Home Page API
  // Header API
export const getHeader = () => { //Hader Section
  return axiosService.get(`header`);
};

//Home age api
export const fetchAllData = ( data ) => { //Hader Section
  return axiosService.get(data);
};


// Get csrf Tken
export const getCsrfToken = () => { // Career page API
  return axiosService.get(`csrf-token`);
};
