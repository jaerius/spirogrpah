import React, { useEffect, useRef, useState, useCallback } from 'react';
import p5 from 'p5';
import { useNavigate } from 'react-router-dom';
// import { useConnectWallet } from 'use-wallet';
// import { ethers } from 'ethers';
// import abi from './abi'; // Assuming abi.js is exported from this path

const Sketch = ({
  firstName,
  lastName,
  birth,
  isSubmitted,
  onEnd,
  onProgress,
}) => {
  const navigate = useNavigate();
  const sketchRef = useRef();
  const [sketchInstance, setSketchInstance] = useState(null);
  const [isEnd, setIsEnd] = useState(false);
  const [url, setUrl] = useState("");
  const [aiUrl, setAiUrl] = useState("");
  const [progress, setProgress] = useState(0);

  // const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  // let ethersProvider;
  // if (wallet) {
  //   ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  // }
  // const CA = "0x96DefAc7d1E8F0F4258779A8343c97850C6de7fa";

  // const mintNFT = async (aiUrl) => {
  //   if (!aiUrl) {
  //     console.error("AI URL is not set.");
  //     return;
  //   }
  //   try {
  //     const contract = new ethers.Contract(CA, abi, ethersProvider.getSigner());
  //     const mint = await contract.awardItem(aiUrl);
  //     await mint.wait();
  //     console.log("NFT has been minted with AI URL:", aiUrl);
  //   } catch (error) {
  //     console.error("error minting NFT:", error);
  //   }
  // };

  // async function sendUrlToServer(url) {
  //   try {
  //     const response = await fetch("/.netlify/functions/saveUrl", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ url, status1, status2 }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok.");
  //     }
  //     const data = await response.json();
  //     console.log(data.metadataResult, "hi");
  //     setAiUrl(data.metadataResult);
  //     return data;
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
 // }

  // useRef를 사용하여 참조 유지
  const firstNameRef = useRef(firstName);
  const lastNameRef = useRef(lastName);
  const birthRef = useRef(birth);
  const handleProgressRef = useRef(onProgress);
  const handleEndRef = useRef(onEnd);

  const handleProgress = useCallback(
    (progress) => {
      handleProgressRef.current(progress);
    },
    []
  );

  const handleEnd = useCallback(() => {
    handleEndRef.current();
  }, []);

  useEffect(() => {
    firstNameRef.current = firstName;
    lastNameRef.current = lastName;
    birthRef.current = birth;
    handleProgressRef.current = onProgress;
    handleEndRef.current = onEnd;
  }, [firstName, lastName, birth, onProgress, onEnd]);

  useEffect(() => {
    if (!isSubmitted) return;

    const sketch = (p) => {
      let R, r, R2, r2;
      let totalRotations = 80;
      let baseAngleIncrement = 2.0;
      let currentRotation = 0;
      const hash1 = nameHash(firstNameRef.current, lastNameRef.current);
      const hash2 = nameHash(birthRef.current);
      const values1 = extractValuesFromHash(hash1);
      const values2 = extractValuesFromHash(hash2);

      R = values1[0];
      r = values1[1];
      R2 = values2[0];
      r2 = values2[1];
      numericalCorrection();
      numericalCorrectionForBirthdate();

      p.setup = () => {
        p.createCanvas(1800, 1080).parent(sketchRef.current);
        p.background(0);
        p.noFill();
        p.frameRate(60);
      };

      p.draw = () => {
        p.translate(p.width / 2, p.height / 2);
        drawSpirograph(p, R, r, currentRotation, getRandomColor(p), firstNameRef.current);
        drawSpirograph(p, R2, r2, currentRotation, getRandomColor(p), firstNameRef.current);
        currentRotation += baseAngleIncrement;

        const progressPercentage = Math.min(
          (currentRotation / (totalRotations * p.TWO_PI)) * 100,
          100
        );
        setProgress(progressPercentage.toFixed(2));
        handleProgress(progressPercentage.toFixed(2));

        if (currentRotation >= totalRotations * p.TWO_PI) {
          setIsEnd(true);
          handleEnd();
          p.noLoop();
          handleSaveImage(p);
        }
      };

      const handleSaveImage = async (p) => {
        p.canvas.toBlob(async (blob) => {
          const formData = new FormData();
          formData.append("image", blob);

          const proxyUrl = "https://frozen-scrubland-19711-6243810201c8.herokuapp.com/"
          const targeturl = "https://calm-eyrie-10609-82f65a8348a1.herokuapp.com/upload-to-ipfs";
          const url = `${proxyUrl}${targeturl}`;
          try {
            const response = await fetch(
              url,
              {
                method: "POST",
                body: formData, // FormData 객체 전송
                headers: {
                  'Accept': 'application/json',
                  // 추가 헤더가 필요한 경우 여기에 추가
                },
                credentials: 'include', // 이 설정을 추가하여 쿠키를 포함합니다
              }
            );
            const data = await response.json();
            console.log(data.ipfsUrl, "clientside");
            setUrl(data.ipfsUrl);
            return data.ipfsUrl;
          } catch (error) {
            console.error("Error sending image to server:", error);
          }
        }, "image/png");
      };

      function drawSpirograph(p, R, r, rotation, c, firstName) {
        let previousX = (R - r) * p.cos(0) + r * p.cos((0 * (R - r)) / r);
        let previousY = (R - r) * p.sin(0) - r * p.sin((0 * (R - r)) / r);

        for (let angle = 0; angle <= rotation; angle += baseAngleIncrement) {
          let x, y;

          switch (firstName) {
            case "김":
              x = (R - r) * p.cos(angle) + (r - R) * p.cos(angle * (R - r));
              y = (R / r) * p.sin(angle) - (r - R) * p.sin(angle * (R - r));
              break;
            case "이":
              x = (R - r) * p.cos(angle) + r * p.cos((angle * (R - r)) / r + p.PI / 4);
              y = (R - r) * p.sin(angle) - r * p.sin((angle * (R - r)) / r + p.PI / 4);
              break;
            case "박":
              x = (R - r) * p.cos(angle) + r * p.cos((angle * (R - r)) / r - p.PI / 4);
              y = (R - r) * p.sin(angle) - r * p.sin((angle * (R - r)) / r - p.PI / 4);
              break;
            case "최":
              x = (R - r) * p.cos(angle) + r * p.cos((angle * (R - r)) / r + p.PI / 2);
              y = (R - r) * p.sin(angle) - r * p.sin((angle * (R - r)) / r + p.PI / 2);
              break;
            default:
              x = (R - r) * p.cos(angle) + r * p.cos((angle * (R - r)) / r);
              y = (R - r) * p.sin(angle) - r * p.sin((angle * (R - r)) / r);
              break;
          }

          p.stroke(c, 150);
          p.strokeWeight(0.25);
          p.line(previousX, previousY, x, y);

          previousX = x;
          previousY = y;
        }
      }

      function getRandomColor(p) {
        return p.color(p.random(255), p.random(255), p.random(255));
      }

      function nameHash(data) {
        const fnv1a_32 = (str) => {
          let hash = 0x811c9dc5;
          for (let i = 0; i < str.length; i++) {
            hash ^= str.charCodeAt(i);
            hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
          }
          return hash >>> 0;
        };

        return fnv1a_32(data).toString(16);
      }

      function extractValuesFromHash(hash) {
        const decimal = parseInt(hash, 16);
        return [
          p.map((decimal >> 24) & 0xff, 0, 255, 100, 500),
          p.map((decimal >> 16) & 0xff, 0, 255, 50, 250),
        ];
      }

      function numericalCorrection() {
        if (R > 500) R -= 500;
        if (r > 600) r -= 600;
        if (r < 50) r += 50;
      }

      function numericalCorrectionForBirthdate() {
        if (R2 > 500) R2 -= 500;
        if (r2 > 600) r2 -= 600;
        if (r2 < 50) r2 += 50;
      }
    };

    const newSketchInstance = new p5(sketch, sketchRef.current);
    setSketchInstance(newSketchInstance);

    return () => {
      newSketchInstance.remove();
    };
  }, [isSubmitted, handleEnd, handleProgress]);

  // 두 번째 useEffect: url 의존성
  // useEffect(() => {
  //   if (url) {
  //     sendUrlToServer(url)
  //       .then(() => {
  //         console.log("URL was sent to the server successfully.");
  //       })
  //       .catch((error) => {
  //         console.error("There was an error sending the URL to the server:", error);
  //       });
  //   }
  // }, [url]);

  const handlePrint = () => {
    if (url) {
      const printWindow = window.open("");
      printWindow.document.write(
        `<img src="${url}" onload="window.print();window.close()" />`
      );
    } else {
      console.error("No URL available for printing");
    }
  };

  return (
    <div className="MySketch">
      <div ref={sketchRef}></div>
      <div className="nft">
        {isEnd && (
          <div className="buttons">
            <button className="button2" onClick={handlePrint}>
              <span className="button-text">출력하기</span>
              <div className="tooltip">
                AI를 활용하여 자신의 취향을 담아 <br /> 더 멋진 심볼을 만들어
                보아요!
              </div>
            </button>
            <button
              className="button3"
              onClick={() => navigate("/aiCorrection", { state: { url } })}
            >
              <span className="button-text">AI 수정하기</span>
              <div className="tooltip">
                AI를 활용하여 자신의 취향을 담아 <br /> 더 멋진 심볼을 만들어
                보아요!
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sketch;
