import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { App } from "./Components/App";
import { HomePage } from "./Components/pages/HomePage";
import { MapView } from "./Components/MapView";

// Rendering
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <App />
  // <BrowserRouter>
  //   <Routes>
  //       <Route path="*" element={<App />} />
  //   </Routes>
  // </BrowserRouter>
);
