import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routers;
