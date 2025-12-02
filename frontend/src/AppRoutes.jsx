import { BrowserRouter, Routes, Route } from "react-router-dom";

// Backend Admin Authentication
import PrivateRoute from "./Admin/PrivateRoute";
import LoginForm from "./Admin/LoginForm";
import ForgetPassword from "./Admin/ForgetPassword";
import ResetPassword from "./Admin/ResetPassword";
import RegisterForm from "./Admin/RegisterForm";

// Admin Section
import Layout from "./Admin/adminsection/Layout";
import Content from "./Admin/adminsection/Content";
import HomeRoutes from "./Admin/adminsection/homesection/Homeroutes";
import MenuRoutes from "./Admin/adminsection/menusection/MenuManagement";
import AboutRoutes from "./Admin/adminsection/aboutUs/AboutUsroutes";
import CarrerRoutes from "./Admin/adminsection/carrerPage/Carrerroutes";
import MissionRoutes from "./Admin/adminsection/missionsection/Missionroutes";
import MemberRoutes from "./Admin/adminsection/MemberSection/LeadershipTeam";
import SocialMediaLinkManagerRoutes from "./Admin/adminsection/SocialAddress/SocialMediaLinkManager";
import ContactManagerRoutes from "./Admin/adminsection/Contactform/ContactManager";
import KeyProjectsRoutes from "./Admin/adminsection/keyProject/KeyProjectRoutes";
import BlogManagerRoutes from "./Admin/adminsection/blogSection/BlogsManager";
import PoliciesManagerRoutes from "./Admin/adminsection/PoliciesSection/PoliciesManager";
import ProjectServiceSectionRoutes from "./Admin/adminsection/ProjectService/ProjectServiceRoute";
import CustmoresManagerRoutes from "./Admin/adminsection/CustmoresSection/Custmore";
import DownloadManagerRoutes from "./Admin/adminsection/DownloadSection/Downloadroutes";
import FoodDownloadManagerRoutes from "./Admin/adminsection/FoodSectionDownload/FoodDownloadroutes";
import ContactUsRoutes from "./Admin/adminsection/ContactUs";
import JobListRoutes from "./Admin/adminsection/jobSection/jobList";
import MapLocationRoutes from "./Admin/adminsection/MapSection/Mapdata";
import UserPermissionRoutes from "./Admin/adminsection/UserSection/UserAccess";
import JobApplicationListRoutes from "./Admin/adminsection/jobSection/jobApplicationList";

// Frontend Site Routes
// Add your frontend pages:
import LayoutScreen from "./Components/Common/Layout";
 import Home from "./Components/Routes";
 import AboutUsPage from "./Components/Pages/AboutUsPage";
 import Services from './Components/Pages/ServicesPage'
 import ServicesDetail from "./Components/Pages/ServicesDetail";
 import ScrollTop from "./Components/Common/ScrollTop";
// import About from "./Frontend/pages/About";
// import Contact from "./Frontend/pages/Contact";
// Add more as needed...

function AppRoutes() {
  return (
    <>
      <ScrollTop />
      <Routes>

        {/* -----------------------------------
            FRONTEND / PUBLIC ROUTES
        ------------------------------------ */}
        
          <Route path="/" element={<LayoutScreen />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="services" element={<Services />} />
            <Route path="services-detail" element={<ServicesDetail />} />
          </Route>
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */} 

        {/* Add more frontend pages here */}

        {/* -----------------------------------
            ADMIN AUTH ROUTES
        ------------------------------------ */}
        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/admin/register" element={<RegisterForm />} />
        <Route path="/admin/forgot-password" element={<ForgetPassword />} />
        <Route path="/admin/reset-password/:token" element={<ResetPassword />} />
     
        {/* -----------------------------------
            ADMIN PROTECTED ROUTES
        ------------------------------------ */}
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        > */}
         <Route  path="/"  element={  <Layout />}>
            <Route path="admin/menu" element={<MenuRoutes />} />
            <Route path="admin/home-page" element={<HomeRoutes />} />
            <Route path="admin/about" element={<AboutRoutes />} />
            <Route path="admin/career" element={<CarrerRoutes />} />
            <Route path="admin/mission" element={<MissionRoutes />} />
            <Route path="admin/members" element={<MemberRoutes />} />
            <Route path="admin/social-media" element={<SocialMediaLinkManagerRoutes />} />
            <Route path="admin/contact" element={<ContactManagerRoutes />} />
            <Route path="admin/key-projects" element={<KeyProjectsRoutes />} />
            <Route path="admin/blogs" element={<BlogManagerRoutes />} />
            <Route path="admin/policies" element={<PoliciesManagerRoutes />} />
            <Route path="admin/project-service" element={<ProjectServiceSectionRoutes />} />
            <Route path="admin/customers" element={<CustmoresManagerRoutes />} />
            <Route path="admin/downloads" element={<DownloadManagerRoutes />} />
            <Route path="admin/food-downloads" element={<FoodDownloadManagerRoutes />} />
            <Route path="admin/contact-messages" element={<ContactUsRoutes />} />
            <Route path="admin/job-list" element={<JobListRoutes />} />
            <Route path="admin/job-applications" element={<JobApplicationListRoutes />} />
            <Route path="admin/map-location" element={<MapLocationRoutes />} />
            <Route path="admin/user-permissions" element={<UserPermissionRoutes />} />
          </Route>


      </Routes>
    </>
  );
}

export default AppRoutes;
