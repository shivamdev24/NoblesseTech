import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="termsCondition" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
