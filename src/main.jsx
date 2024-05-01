import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import States from "./pages/states/States.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/states" element={<States />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
