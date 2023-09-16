import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainApp, Register, Login } from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<MainApp />} />
    </Routes>
  );
};

export default Router;
