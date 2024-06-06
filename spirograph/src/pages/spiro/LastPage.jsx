import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {Header} from "../../components/Header/Header";
import {useNavigate} from "react-router-dom";
import "./LastPage.css"

export default function LastPage() {
  const location = useLocation();
  const { corrected, url } = location.state || {};
  const [imageUrl, setImageUrl] = useState(url);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`http://localhost:5001/check-status?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        if (data.status === 'completed') {
          setImageUrl(data.correctedUrl);
          setLoading(false);
          clearInterval(interval);
        }
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    }, 5000); // 5초마다 상태 확인

    return () => clearInterval(interval);
  }, [url]);

  const actionButtons = (
    <div className="button-container">
      <button className="button2">
        <span className="button-text">출력</span>
      </button>
      <button className="button3">
        <span className="button-text">등록</span>
      </button>
    </div>
  );

  return (
    <div className="bg-black font-pretendard items-center">
        <Header/>
     
      <div className="flex flex-col items-center px-4  font-bold bg-black">
            {loading ? (
                <div className="blink">
                <img
                loading="lazy"
                src={url}
                className="flex items-center w-[850px] h-[400px] "
                />
                <div className="text-white text-xl">Loading...</div>
                </div>
                ) : (
                <div>
                <img
                loading="lazy"
                src={imageUrl}
                alt="Generated content"
                className="flex justify-center w-[1100px] h-[556px]"
                />
                <div className=" text-2xl text-center text-gray-200 max-md:max-w-full">
                    세상에 하나 밖에 없는 그래픽이 생성이 되었습니다.
                </div>
                </div>
            )}
      
      
      <div className="flex gap-5 justify-center  max-w-full text-2xl whitespace-nowrap w-[708px]  ">
      <div className="flex justify-center mb-10">{actionButtons}</div>
      </div>
      <div className="justify-center px-4 py-2 text-md mb-10 text-center bg-white rounded-xl text-neutral-900 max-md:px-5" onClick={()=>{Navigate('/')}}>
        홈으로 돌아가기 &gt;
      </div>
    </div>
    </div>
  );
}