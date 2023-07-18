import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Works from "./pages/works";

export default function AppRoutes() {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        {/* App Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        {/* <Route path="/portfolio/:name" element={<Portfolio />} /> */}

        {/* Redirect to root or Not Found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
