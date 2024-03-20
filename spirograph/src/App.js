// App.js
import React, { useState } from 'react';
import MySketch from './pages/spiro/SketchPage.jsx';
import NameBox from './components/NameBox/NameBox.jsx';
import './App.css';
import { button } from '@material-tailwind/react';

function App() {

  return (
    <div className="App">
      <MySketch/>  
    </div>
       
  );
}

export default App;