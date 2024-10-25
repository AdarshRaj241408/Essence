// src/utils/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SummarisingPage from "../components/summarise";
import Footer from "../components/Footer";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <SummarisingPage />
    <Footer />
  </>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
