import { Routes, Route, Outlet } from "react-router-dom";

import Layout from "./Common/Layout";
import HomeRoute from "./HomeRoute/HomeRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeRoute />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
