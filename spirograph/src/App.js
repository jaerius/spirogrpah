// App.js
import React, { useState } from 'react';
import MySketch from './pages/spiro/SketchPage.jsx';
import NameBox from './components/NameBox/NameBox.jsx';
import './App.css';
import { button } from '@material-tailwind/react';

function App() {
/*  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted); // Toggle the submission state to force re-render
  }

  const handleEnd = () => {
    setIsEnd(true);
  }
  

  const boxClass = isSubmitted ? "box" : "box center";
  const buttonClass = isEnd ? "endButton" : "button";
*/
  return (
    <div className="App">
      <MySketch/>  
    </div>
       
  );
}

export default App;