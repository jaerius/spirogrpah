// App.js
import React, { useState } from 'react';
import MySketch from './pages/spiro/SketchPage.jsx';
import NameBox from './components/NameBox/NameBox.jsx';
import './App.css';
import { button } from '@material-tailwind/react';
import SketchPage from './pages/spiro/SketchPage'; // 이 경로가 SketchPage 컴포넌트의 위치와 일치해야 합니다.
import AICorrection from './pages/spiro/AICorrection'; // 이 경로가 AICorrection 컴포넌트의 위치와 일치해야 합니다.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SketchPage />} />
          <Route path="/aiCorrection" element={<AICorrection />} />
        </Routes>
      </Router>
      
    </div>
       
  );
}

export default App;