// App.js
import React from "react";
import "./App.css";
import SketchPage from "./pages/spiro/SketchPage"; // 이 경로가 SketchPage 컴포넌트의 위치와 일치해야 합니다.
import AICorrection from "./pages/spiro/AICorrection"; // 이 경로가 AICorrection 컴포넌트의 위치와 일치해야 합니다.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";
import LastPage from "./pages/spiro/LastPage.jsx";

import SaleListPage from "./pages/SaleList/index";
import BrandingPage from "./pages/brandingPage/index";
import BusinessPage from "./pages/businessPage/index";
import ContactPage from "./pages/contactPage/index.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/salelist" element={<SaleListPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/" element={<Main />} />
          <Route path="/sketch" element={<SketchPage />} />
          <Route path="/aiCorrection" element={<AICorrection />} />
          <Route path="/LastPage" element={<LastPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
