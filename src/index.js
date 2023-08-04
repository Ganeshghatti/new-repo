import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./Description/Description";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shows/:id" element={<Description />} />
    </Routes>
  </BrowserRouter>
);
