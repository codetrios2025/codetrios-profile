import { BrowserRouter, Routes, Route } from "react-router-dom";
// Frontend Site Routes
// Add your frontend pages:
import LayoutScreen from "./Components/Common/Layout";
import HomeRoute from "./Components/HomeRoute/HomeRoute";
 import AboutUsPage from "./Components/Pages/AboutUsPage";
 import Services from './Components/Pages/ServicesPage'
 import ServicesDetail from "./Components/Pages/ServicesDetail";
 import ScrollTop from "./Components/Common/ScrollTop";
 import ContactUsPage from "./Components/Pages/ContactUsPage";
 import TechnologiesPage from "./Components/Pages/Technologies";
 import PortfolioPage from "./Components/Pages/ProtfolioPage";
//Services pages
import EcommerceSolutions from "./Components/ServicesPages/E-CommerceSolutions";
import WebApplications from "./Components/ServicesPages/WebApplications";
import WebDevelopment from "./Components/ServicesPages/WebDevelopment";
import DesignServices from "./Components/ServicesPages/DesignServices";
import TechnologySolutions from "./Components/ServicesPages/TechnologySolutions";
import DigitalStrategy from "./Components/ServicesPages/DigitalStrategy";
import WebDesign from "./Components/ServicesPages/WebDesign";
import ThankyouPage from "./Components/Pages/ThankYou";
import AosRoute from "./Components/Common/AosRoute";

function AppRoutes() {
  return (
    <>
      <ScrollTop />
      <AosRoute />
      <Routes>

        {/* -----------------------------------
            FRONTEND / PUBLIC ROUTES
        ------------------------------------ */}
        
          <Route path="/" element={<LayoutScreen />}>
            <Route index element={<HomeRoute />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="services" element={<Services />} />
            <Route path="/e-commerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/web-applications" element={<WebApplications />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/design-services" element={<DesignServices />} />
            <Route path="/digital-strategy" element={<DigitalStrategy />} />
            <Route path="/website-design" element={<WebDesign />} />
            <Route path="/technology-solutions" element={<TechnologySolutions />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="technologies" element={<TechnologiesPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />
            <Route path="thank-you" element={<ThankyouPage />} />
          </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
