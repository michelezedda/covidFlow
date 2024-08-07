import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import States from "./pages/states/States.jsx";
import Learn from "./pages/learn/Learn.jsx";
import Masks from "./pages/masks/Masks.jsx";
import Exposed from "./pages/exposed/Exposed.jsx";
import Sick from "./pages/sick/Sick.jsx";
import Testing from "./pages/testing/Testing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/states" element={<States />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/masks" element={<Masks />} />
        <Route path="/exposed" element={<Exposed />} />
        <Route path="/sick" element={<Sick />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
