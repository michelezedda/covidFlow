import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import States from "./pages/states/States.jsx";
import Learn from "./pages/learn/Learn.jsx";
import Protect from "./pages/protect/Protect.jsx";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/states" element={<States />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/protect" element={<Protect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
