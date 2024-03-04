import React, { useState } from 'react';
import Sketch from '../Sketch/Sketch.jsx';
import { button } from '@material-tailwind/react';

function NameBox() {
  const [firstName, setFirstName] = useState('');
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

  return (
    <div className="Name">
        <h1 className="h1">Graphic</h1>
        <div className={boxClass}>
        <div className="name">
        <input
          type="text"
          placeholder="Name : "
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div className="birth">
        <input
          type="text"
          placeholder="생년월일 : "
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <button className={buttonClass} onClick={handleSubmit}>그래픽 생성하기</button>
        </div>
      

      <div className = "sketch">
      {isSubmitted && <Sketch
        key={isSubmitted} // key를 isSubmitted 상태에 따라 변경
        firstName={firstName}
        lastName={lastName}
        isSubmitted={isSubmitted}
        onEnd={handleEnd}
      />}
      </div>
    </div>
  );
}

export default NameBox;