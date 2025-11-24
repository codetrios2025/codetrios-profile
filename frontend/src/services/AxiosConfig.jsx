// axiosConfig.js
import axios from 'axios';
import constants from "./constants";
//import { showLoader, hideLoader } from '../reducers/loaderSlice';
//import store from '../store/store';

//let loadingCount = 0;
let axiosService = axios.create({
    baseURL : constants.API_BASE_URL,
    headers:{
        "Accept": "application/json",
        'Content-Type': 'application/json',
    }
})
  // Request interceptor
  // axiosService.interceptors.request.use(
  //   function (config) {
  //     loadingCount++
  //     store.dispatch(showLoader())
  //     return config;
  //   }
  // );

  // Response interceptor
  // axiosService.interceptors.response.use(
  //   function (response) {
  //     loadingCount--
  //     if(!loadingCount)
  //       store.dispatch(hideLoader())
  //     return response;
  //   },
  //   function (error) {
  //     loadingCount--
  //     if(!loadingCount)
  //       store.dispatch(hideLoader())
  //     return Promise.reject(error);
  //   }
  // );

export default axiosService;