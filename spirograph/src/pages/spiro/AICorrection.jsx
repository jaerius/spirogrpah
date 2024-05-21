import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AICorrection.css';

function AICorrection() {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handlePanelClick = (index) => {
    setSelectedPanel(index);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Selected panel:", selectedPanel);
  }, [selectedPanel]);

  const actionButtons = (
    <div className="button-container">
      <button className="button2" onClick={handlePrevious}>
        <span className="button-text">이전</span>
      </button>
      <button className="button3" onClick={handleNext}>
        <span className="button-text">다음</span>
      </button>
    </div>
  );

  const nextButton = (
    <button
      className="px-16 py-3 text-lg font-bold whitespace-nowrap click bg-gray rounded-xl text-zinc-100 text-white"
      onClick={handleNext}
    >
      다음
    </button>
  );

  const panels = [
    [
      { src: '/assets/images/spiro11.jpg', text: '빛' },
      { src: '/assets/images/sprio22.jpg', text: '소리' },
      { src: '/assets/images/spiro33.jpg', text: '우주' },
      { src: '/assets/images/spiro44.jpg', text: '점' },
    ],
    [
      { src: '/assets/images/another1.jpg', text: '태양' },
      { src: '/assets/images/another2.jpg', text: '달' },
      { src: '/assets/images/another3.jpg', text: '별' },
      { src: '/assets/images/another4.jpg', text: '구름' },
    ],
  ];

  return (
    <div className="h-screen w-screen bg-black font-pretendard flex items-center justify-center no-scroll">
      <div className="h-full w-full max-md:pl-5 flex flex-col md:flex-row">
        <div className="flex items-center ml-5 justify-center w-full md:w-6/12 max-md:w-full h-full bg-black p-10">
          <div className="h-4/5 w-4/5 custom-container bg-black flex items-center justify-center ml-12">
            <img
              loading="lazy"
              src="/assets/images/sample.png"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col w-full ml-12 md:w-6/12 max-md:w-full h-full p-5 md:p-10 interactive-elements section2">
          <div className="text-container">
            <div className="flex gap-1 text-lg mb-5 ml-3">
              <div className="font-black text-zinc-100 ml-2 mr-5 text-xs text-white">1/2</div>
              <div className="flex-auto font-bold text-xs text-white text-left">
                마음에 드는 그래픽이 무엇인가요 ?
              </div>
            </div>
          </div>
          <div className="scale-container2">
            <div className="custom-container2 mt-12">
              <div className="flex flex-col flex-grow justify-center">
                <div className="flex max-md:flex-col">
                  {panels.slice(0, 2).map((panel, index) => (
                    <div
                      key={index}
                      className={`image-wrapper ${selectedPanel === index ? 'selected' : ''}`}
                      onClick={() => handlePanelClick(index)}
                    >
                      <img
                        loading="lazy"
                        src={panel.src}
                        className="custom-size object-cover border border-solid border-silver rounded-lg"
                      />
                      {selectedPanel === index && (
                        <div className="overlay-text">{panel.text}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex max-md:flex-col">
                  {panels.slice(2).map((panel, index) => (
                    <div
                      key={index + 2}
                      className={`image-wrapper ${selectedPanel === index + 2 ? 'selected' : ''}`}
                      onClick={() => handlePanelClick(index + 2)}
                    >
                      <img
                        loading="lazy"
                        src={panel.src}
                        className="custom-size object-cover border border-solid border-silver rounded-lg"
                      />
                      {selectedPanel === index + 2 && (
                        <div className="overlay-text">{panel.text}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-10">
            {selectedPanel !== null ? actionButtons : nextButton}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AICorrection;
