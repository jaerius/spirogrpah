import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5'; // p5 라이브러리 가져오기
import './Sketch.scss';
import html2canvas from "html2canvas";


const Sketch = ({ firstName, lastName, isSubmitted, onEnd }) => {
  const sketchRef = useRef();
  const [sketchInstance, setSketchInstance] = useState(null);
  const [IsEnd, setIsEnd] = useState(false);
  const [isSaving, setIsSaving] = useState(false);



  useEffect(() => {
    if (!isSubmitted) return;

    const sketch = (p) => {
      let R = 400;
      let r = 319;
      let k;
      let totalRotations = 50000;
      let additionalRotation = p.PI / 3;
      let baseAngleIncrement = 100;
      let angleIncrement;
      let currentRotation = 0;
      let firstHalf;
      let lastHalf;

      p.setup = () => {
        // 캔버스 생성 및 DOM에 추가
        p.createCanvas(800, 400).parent(sketchRef.current);
        p.background(0);
        p.noFill();

        const hash = nameHash(firstName, lastName);
        const dec = hexToDec(hash);
        hashParser(dec);

        R = firstHalf;
        r = lastHalf;
        numericalCorrection();

        k = R / r;
        p.frameRate(1000);
        angleIncrement = baseAngleIncrement;
      };

      p.draw = () => {
        p.translate(p.width / 2, p.height / 2);

        if (currentRotation < totalRotations * p.TWO_PI) {
          let x1 = (R - r) * p.cos(currentRotation) + r * p.cos(currentRotation * (R - r) / r);
          let y1 = (R - r) * p.sin(currentRotation) - r * p.sin(currentRotation * (R - r) / r);
          let x2 = (R - r) * p.cos(currentRotation + angleIncrement) + r * p.cos((currentRotation + angleIncrement) * (R - r) / r);
          let y2 = (R - r) * p.sin(currentRotation + angleIncrement) - r * p.sin((currentRotation + angleIncrement) * (R - r) / r);

          p.stroke(getRandomColor(p));
          p.strokeWeight(0.25);
          p.line(x1, y1, x2, y2);
          console.log("ing")

          currentRotation += angleIncrement;
        } else {
          console.log("end");
          setIsEnd(true);
          onEnd();
          p.noLoop();
          handleSaveImage(firstName,lastName);
        }
      };

      const handleSaveImage = async (firstName, lastName) => {
        p.saveCanvas(firstName + lastName + '_sketch', 'png');
      }

      function getRandomColor(p) {
        return p.color(p.random(255), p.random(255), p.random(255), 150);
      }

      function nameHash(firstName, lastName) {
        let firstHash = fnv1a_32(firstName).toString(16);
        let secondHash = fnv1a_32(lastName).toString(16);
        return fnv1a_32(firstHash + secondHash).toString(16);
      }

      function fnv1a_32(data) {
        let hash = 0x811c9dc5;
        let prime = 0x01000193;

        for (let i = 0; i < data.length; i++) {
          hash ^= data.charCodeAt(i);
          hash *= prime;
        }

        return hash >>> 0;
      }

      function hexToDec(hex) {
        return parseInt(hex, 16).toString();
      }

      function hashParser(numStr) {
        firstHalf = parseFloat(numStr.substring(0, 5)) / 100;
        lastHalf = parseFloat(numStr.substring(5)) / 100;
        R = firstHalf;
        r = lastHalf;
      }

      function numericalCorrection() {
        if (R > 500) {
          R -= 500;
        }
        if (r > 600) {
          r -= 600;
        }
        if (r < 50) {
          r += 50;
        }
      }
    };

    const newSketchInstance = new p5(sketch, sketchRef.current);
    setSketchInstance(newSketchInstance);

    return () => {
      newSketchInstance.remove(); // 컴포넌트가 언마운트될 때 스케치 제거
    };
  }, [/*{firstName, lastName,}*/ isSubmitted]);

  return (
    <div className="MySketch">
      <div ref={sketchRef}></div>
      <div className="nft">
      {IsEnd&&
        <div className="buttons">
        <button className="button1">NFT 발행하기</button>
        <button className="button2">출력하기</button>
        <button className="button3">AI 수정하기</button>
        </div>
        }
      </div>
    </div>
  );
};

export default Sketch;
