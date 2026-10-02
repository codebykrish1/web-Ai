import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/generate.jsx";
import WebsiteEditor from "./pages/WebsiteEditior.jsx";
import LiveSite from "./pages/LiveSite.jsx";
const AppContent = () => {
  const location = useLocation();
  const hideNavbar = ["/dashboard", "/generate", "/editor", "/site"].some(path =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/editor/:id" element={<WebsiteEditor />} />
        <Route path="/site/:id" element={<LiveSite/>} />

      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;