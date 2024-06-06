<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaleListPage from "./pages/SaleList/index";
import BrandingPage from "./pages/brandingPage/index";
import BusinessPage from "./pages/businessPage/index";

function App() {
  //아 찌바 왜 또 안돼
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/salelist" element={<SaleListPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/business" element={<BusinessPage />} />
        </Routes>
      </BrowserRouter>
=======
// App.js
import React, { useState } from 'react';
import MySketch from './pages/spiro/SketchPage.jsx';
import NameBox from './components/NameBox/NameBox.jsx';
import './App.css';
import { button } from '@material-tailwind/react';
import SketchPage from './pages/spiro/SketchPage'; // 이 경로가 SketchPage 컴포넌트의 위치와 일치해야 합니다.
import AICorrection from './pages/spiro/AICorrection'; // 이 경로가 AICorrection 컴포넌트의 위치와 일치해야 합니다.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main.jsx';
import LastPage from './pages/spiro/LastPage.jsx';
import LogicPage from './pages/Logic/LogicPage.jsx';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sketch" element={<SketchPage />} />
          <Route path="/aiCorrection" element={<AICorrection />} />
          <Route path="/LastPage" element={<LastPage/>}/>
          <Route path="/LogicPage" element={<LogicPage/>}/>
        </Routes>
      </Router>
      
>>>>>>> upstream/main
    </div>
       
  );
}

export default App;
