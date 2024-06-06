import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AICorrection.css';

function AICorrection() {
  const location = useLocation();
  const { url } = location.state || {};
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTexts, setSelectedTexts] = useState(['', '']);
  const [correctedUrl, setCorrectedUrl] = useState(url); 
  const [corrected, setCorrected] = useState(false);

  const navigate = useNavigate();

  const handlePanelClick = (index) => {
    setSelectedPanel(index);
    const newSelectedTexts = [...selectedTexts];
    newSelectedTexts[currentStep - 1] = panels[currentStep - 1][index].english;
    setSelectedTexts(newSelectedTexts);
  };

  const handleNext = async () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
      setSelectedPanel(null);
    } else {
      console.log("출력하기");
      console.log("Selected Texts:", selectedTexts);
      navigate('/LastPage', { state: { corrected: false, url } }); // 이동 먼저 수행
      await handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setSelectedPanel(null);
      const newSelectedTexts = [...selectedTexts];
      newSelectedTexts[currentStep - 1] = '';
      setSelectedTexts(newSelectedTexts);
    }
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5001/save-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url, // The URL of the image to process
        status1: selectedTexts[0], // The first selected status
        status2: selectedTexts[1], // The second selected status
      }),
    });

    const changedImage = await response.json();
    setCorrectedUrl(changedImage.finalIpfsUrl);
    setCorrected(true);
    // Navigate는 위 handleNext에서 이미 수행했으므로 여기서는 생략합니다.
  };

  useEffect(() => {
    console.log("Selected panel:", selectedPanel);
  }, [selectedPanel]);

  useEffect(() => {
    console.log("Selected texts:", selectedTexts);
  }, [selectedTexts]);

  const actionButtons = (
    <div className="button-container">
      <button className="button2" onClick={handlePrevious}>
        <span className="button-text">이전</span>
      </button>
      <button className="button3" onClick={handleNext}>
        <span className="button-text">{currentStep < 2 ? '다음' : '출력'}</span>
      </button>
    </div>
  );

  const nextButton = (
    <button className="button3" onClick={handleNext}>
      <span className="button-text">다음</span>
    </button>
  );

  const panels = [
    [
      { src: '/assets/images/spiro11.jpg', text: '빛', english: 'light' },
      { src: '/assets/images/sprio22.jpg', text: '소리', english: 'waterwave' },
      { src: '/assets/images/spiro33.jpg', text: '우주', english: 'space' },
      { src: '/assets/images/spiro44.jpg', text: '점', english: 'dot' },
    ],
    [
      { src: '/assets/images/spring.jpg', text: '봄', english: 'spring' },
      { src: '/assets/images/summer.jpg', text: '여름', english: 'summer' },
      { src: '/assets/images/fall.jpg', text: '가을', english: 'autumn' },
      { src: '/assets/images/winter.jpg', text: '겨울', english: 'winter' },
    ],
  ];

  return (
    <div className="h-screen w-screen bg-black font-pretendard flex items-center justify-center no-scroll">
      <div className="h-full w-full max-md:pl-5 flex flex-col md:flex-row">
        <div className="flex items-center ml-12 justify-center  md:w-6/12  h-full bg-black p-10" >
          <div className=" custom-container bg-black flex items-center justify-center ml-12" style={{width: '100%', height: '100%'}}>
            <img
              loading="lazy"
              src={url}
              style={{width: '100%', height: '80%'}}
              className=" object-cover rounded-lg ml-12"
            />
          </div>
        </div>
        <div className="flex flex-col w-full ml-12 md:w-6/12 max-md:w-full h-full p-5 md:p-10 interactive-elements section2">
          <div className="text-container">
            <div className="flex gap-1 text-lg mb-5 ml-3">
              <div className="font-black text-zinc-100 ml-3 mr-5 text-s text-white">{currentStep}/2</div>
              <div className="flex-auto font-bold text-s text-white text-left">마음에 드는 그래픽이 무엇인가요 ?</div>
            </div>
          </div>
          <div className="scale-container2">
            <div className="custom-container2">
              <div className="flex flex-col flex-grow justify-center">
                <div className="flex max-md:flex-col">
                  {panels[currentStep - 1].slice(0, 2).map((panel, index) => (
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
                      {selectedPanel === index && <div className="overlay-text">{panel.text}</div>}
                    </div>
                  ))}
                </div>
                <div className="flex max-md:flex-col">
                  {panels[currentStep - 1].slice(2).map((panel, index) => (
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
                      {selectedPanel === index + 2 && <div className="overlay-text">{panel.text}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-10">{selectedPanel !== null ? actionButtons : nextButton}</div>
        </div>
      </div>
    </div>
  );
}

export default AICorrection;
