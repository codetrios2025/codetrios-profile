import axiosService from "./AxiosConfig";

// Home Page API
  // Header API
export const getHeader = () => { //Hader Section
  return axiosService.get(`header`);
};
// Banner API
export const getBannerAPI = () => { //Banner Section
  return axiosService.get(`banners`);
};
// who we are API
export const getWhoWeAreAPI = () => { //Banner Section
  return axiosService.get(`whoweare`);
};
// What we offer are API
export const getWhatWeOfferAPI = () => { //home Offer Section
  return axiosService.get(`whoweoffermain`);
};
// What we offer Tab
export const getOfferTabAPI = () => { //Offer Tab Section
  return axiosService.get(`homeservices/all`);
};

// What we offer Tab image
export const getOfferTabImageAPI = () => { //Offer Tab Section
  return axiosService.get(`homeservicesimage`);
};

// Leadership Team 
export const getLeadershipAPI = () => { //Leadership Section
  return axiosService.get(`team`);
};

// Join Team 
export const getJoinTeamspAPI = () => { //jointeams Section
  return axiosService.get(`jointeams`);
};

// improvement Section 
export const getImprovementAPI = () => { //improvement Section
  return axiosService.get(`improvement`);
};

// Sectors we Operate
export const getSectorsAPI = () => { //Sectors we Operate Section
  return axiosService.get(`sector`);
};


// Key Project
export const getKeyProjectsAPI = () => { //Key Project Section
  return axiosService.get(`keyproject`);
};

export const getKeyProjectsDetailAPI = (url) => { //Key Project Section
  return axiosService.get(`keyproject/deatil/${url}`);
};


// About Page API
export const getAboutUsAPI = () => { //About Page content
  return axiosService.get(`about`);
};

export const getSubsidiariesAffiliatesAPI = () => { //Key Project Section
  return axiosService.get(`vision`);
};

export const getTQTeams = (positionType) => { //Board of Directors and leadership
  return axiosService.get(`team`, {params: { positionType }})
};

export const getMissionAPI = () => { //Mission page
  return axiosService.get(`mission`);
};

export const getMissionVideoAPI = () => { //Mission Video
  return axiosService.get(`video`);
};

export const getTataValueAPI = (valueType) => { //Mission page Tata value
  return axiosService.get(`values/valuetype`, {params: { valueType }});
};

export const getServicesTypeAPI = (servicesType) => { //All Services Type
  return axiosService.get(`homeservicesimage/byservice`, {params: { servicesType }});
};
export const getServicesTypeDetailAPI = (url) => { //All Services Type
  return axiosService.get(`servicedetails/deatils/${url}`);
};
export const getServiceOverVIewAPI = () => { //project Services Overview
  return axiosService.get(`servicedetails/deatils/services`);
};
export const getFoodKeyAPI = () => { //Food certification food box section
  return axiosService.get(`iconservices/food-certification`);
};

export const getKeyAspectsAPI = (url) => { //certification Key Aspects
  return axiosService.get(`iconservices/${url}`);
};
export const getAssuranceOviewViewAPI = () => { //Assurance  Overview
  return axiosService.get(`assurance/all`);
};
export const getWhyChooseusAPI = (url) => { //All Services Type
  return axiosService.get(`whychooseus/deatils/${url}`);
};
//Sector PAge API
export const getSectorDetailAPI = (url) => { //All Services Type
  return axiosService.get(`sector/detail/${url}`);
};
// Blogs Page
export const getBlogsAPI = () => { //Blogs
  return axiosService.get(`blog`);
};

// policies Page
export const getPoliciesAPI = () => { //policies 
  return axiosService.get(`policies`);
};
//Download
export const getAssuranceDownloadAPI = (pageType) => { //All Services Type
  return axiosService.get(`downloads/list`, {params: { pageType }});
};
//XLS File API
export const getXLSDownloadAPI = (pageType) => { //All Services Type
  return axiosService.get(`customers/`, {params: { pageType }});
};
// Contact us Page
export const getContactUsAPI = () => { //Contact us
  return axiosService.post(`contactus`);
};

export const getTQAddressAPI = (page) => { //Mission page Tata value
  return axiosService.get(`address`, {params: { page }});
};

// Carrer 
export const getCareerAPI = () => { // Career page API
  return axiosService.get(`carrers`);
};

export const getFooterAddress = () => { //Footer Section Address
  return axiosService.get(`address`);
};
export const getKeyProjectsMain = () => { //Key project page
  return axiosService.get(`keyheading`);
};
export const getSearchApi = (query) => { //Search page
  return axiosService.get(`search/search`, {params: { query }});
};
// Get csrf Tken
export const getCsrfToken = () => { // Career page API
  return axiosService.get(`csrf-token`);
};

//Certification Download
export const getCertificationDownloadAPI = (pageType) => { //All Services Type
  return axiosService.get(`downloadtypes/list`, {params: { pageType }});
};
export const getCertificationPDF = () => { //fooddownloads pdf
  return axiosService.get(`fooddownloads`);
};