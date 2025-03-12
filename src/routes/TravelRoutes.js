import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import FirstSection from "../components/layout/products/FirstSection";

const TravelRoutes = () => {
  const routes = [
    {
      link: "/",
      element: <FirstSection />,
      id: 1,
    },
    {
      link: "/login",
      element: <Login />,
      id: 2,
    },
    {
      link: "/register",
      element: <Register />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default TravelRoutes;
