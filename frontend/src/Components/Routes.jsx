import { Routes, Route, Outlet } from "react-router-dom";

import Layout from "./Common/Layout";
import ScrollTop from "./Common/ScrollTop";
import HomeRoute from "./HomeRoute/HomeRoute";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage";
import ServicesDetail from "./Pages/ServicesDetail";

const AppRoutes = () => {
  return (
    <>
    <ScrollTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeRoute />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services-detail" element={<ServicesDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
