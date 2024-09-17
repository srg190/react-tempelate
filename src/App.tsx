import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page404 from "@src/pages/404NotFound";
import Home from "@src/pages/home"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;