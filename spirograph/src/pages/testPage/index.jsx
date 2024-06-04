import { useEffect, useState } from "react";

import "./index.css";
export default function Parallax() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    //여기 로그를 찍어봐야 높이가 몇 일 때 효과 적용할 건지를 알 수 있음
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div className="wrapper">
        <div
          className="bg bg1"
          style={{
            backgroundPositionY: position / 2,
          }}
        >
          <div>Welcome</div>
        </div>
        <div
          className="bg bg2"
          style={{
            backgroundPositionY: position / -3,
          }}
        >
          <div>Happy New Year</div>
        </div>
        <p
          className="desc"
          style={{
            transform: `translateX(${-position}px)`,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p
          className="desc2"
          style={{
            transform: `translateX(${position}px)`,
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 2086) / 100,
          }}
        >
          Duis aute irure dolor
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 2086) / 100,
          }}
        >
          Lorem ipsum dolor sit amet
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 2086) / 300,
            animationDuration: "1s",
            animationName: "fadeInUp",
          }}
        >
          Excepteur sint occaecat
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 2086) / 300,
          }}
        >
          sunt in culpa qui officia deserunt
        </p>
        {/* <img
        src={item1}
        className="item"
        alt=""
        style={{
          transform: `translateY(${position / 2}px)`,
        }}
      />
      <img
        src={item2}
        className="item item_snow"
        alt=""
        style={{
          transform: `translateY(${position / 4}px)`,
        }}
      /> */}
      </div>
    </div>
  );
}
