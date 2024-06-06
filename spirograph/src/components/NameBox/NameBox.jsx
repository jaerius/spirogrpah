import React, { useState } from 'react';
import Sketch from '../Sketch/Sketch.jsx';
import { button } from '@material-tailwind/react';
import './NameBox.scss';

function NameBox({ isSubmitted, onNameSubmit, Counter}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [isEnd, setIsEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    onNameSubmit(isSubmitted); // Toggle the submission state to force re-render
  }

  const handleEnd = () => {
    setIsEnd(true);
  }
  
  const handleProgress = (progress) => {
    setProgress(progress);
  }

  const boxClass = isSubmitted ? "box" : "box center";
  const buttonClass = isEnd ? "SymbolEndButton" : "SymbolButton";

  return (
    <div className="Name">
       
        <div className={boxClass}>
        <div className="name">
        <input
          type="text"
          placeholder="성 : "
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div className="name">
        <input
          type="text"
          placeholder="이름 : "
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        <div className="birth">
        <input
          type="text"
          placeholder="생년월일 : "
          onChange={(e) => setBirth(e.target.value)}
        />
        </div>
        <button className={buttonClass} onClick={handleSubmit}>{isEnd ? "심볼 생성완료" : isSubmitted ? `그래픽 생성 중 ${progress}%`: "그래픽 생성하기"}</button>
        </div>
      

      <div className = "sketch">
      {isSubmitted && <Sketch
        key={isSubmitted} // key를 isSubmitted 상태에 따라 변경
        firstName={firstName}
        lastName={lastName}
        birth={birth}
        isSubmitted={isSubmitted}
        onEnd={handleEnd}
        onProgress={handleProgress}
      />}
      </div>
    </div>
  );
}

export default NameBox;