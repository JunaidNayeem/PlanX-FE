import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import HomePage from "../Pages/HomePage.jsx";

function MainRoute() {
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>;
}
