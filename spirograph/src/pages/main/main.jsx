import * as React from "react";
import "./main.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import gsap from "gsap";
import Navbar from "../../components/NavBar/Navbar";
export default function Main() {
  const navigate = useNavigate();
  const imageWrapperRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = gsap.utils.toArray(boxesRef.current);

    horizontalLoop(boxes, {
      paused: false,
      repeat: -1,
      reversed: true,
      speed: 1,
    });
  }, []);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });
    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }

  return (
    <div className="bg-black font-pretendard">
      {/* <Navbar /> */}
      <Header />

      <div className="flex justify-center items-center mt-5 w-full text-sm font-semibold leading-4 text-center text-white whitespace-nowrap bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-4 w-full max-w-[1589px] max-md:flex-wrap max-md:max-w-full">
          <video
            loading="lazy"
            src="/assets/videos/main1.mp4"
            className="w-full  max-md:max-w-full"
            loop
            autoPlay
            muted
            playsInline
          />
        </div>
      </div>

      <div className="text-left text-custom leading-custom self-start mt-24 ml-5 md:w-1/3 text-sm font-medium text-neutral-400  max-md:mt-10 max-md:max-w-full">
        농업에서 인터넷에 이르는 기술의 발전은 인류에게 생존과 편의의 혁명적
        변화를 가져왔다. <br /> 바퀴의 '속도', 인쇄술의 '지식', 전구의 '빛',
        컴퓨터와 인터넷의 '연결'은 우리 문명을 전례 없이 <br /> 도약시키는
        계기가 되었다. 그리고 2024년 현재, 인공지능은 '지능'의 혁명을 예고하며
        산업, <br />
        의료, 교육 등 삶의 전 영역에 대변혁을 몰고 오고 있다.
      </div>

      <div className="flex justify-center mt-14 w-full max-w-full ml-20">
        <div className="w-3/4">
          <div className="flex justify-between mt-3.5 ml-10">
            <div className="text-custom text-left w-2/3 text-sm ml-5 font-medium leading-custom text-white">
              <p>
                기하학에서 하이포사이클로이드(hypocycloid)는 큰
                <span className="underline">원</span> 안에서 작은 원을
                <br />
                굴렸을 때 작은 원 위의 정점이 그리는 궤적을 말한다. 직선 위에서
                원을 굴렸
                <br />을 때 얻어지는{" "}
                <span className="underline">사이클로이드</span>와 비교된다.
              </p>
            </div>
            <div className="text-custom text-left w-2/3 text-sm ml-14 font-medium leading-custom text-white">
              <p>
                원의 모든것은 시초이자 전체이다. 우리는 원을 통해 형성되어
                세상을 보고
                <br /> 원 안에서 유기적으로 살아간다. 각 원은 그 안에서 자신만의
                의미를 갖고있
                <br />
                으며 아름다움의 가치를 지니고 있다.
              </p>
            </div>
            <div className="w-1/2 circle-gradient flex items-center justify-center ml-14">
              <button
                className="text-2xl font-bold underline"
                onClick={() => {
                  navigate("/sketch");
                }}
              >
                원 이야기 보러가기 &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb52233e6caca20b63d8280ddc250736a21e9ce7751130483c5771b7a598e09b?"
        className="mt-20 w-full stroke-[2px] stroke-white max-md:mt-10 max-md:max-w-full"
        alt=""
      />

      <div className="max-w-0 min-h-0" />

      <div className="flex gap-0 self-start mt-2 font-medium leading-4 image-slider">
        <div className="wrapper">
          <div className="image-wrapper" ref={imageWrapperRef}>
            {[
              "/assets/images/longText.png",
              "/assets/images/longText.png",
              "/assets/images/longText.png",
              "/assets/images/longText.png",
            ].map((src, index) => (
              <div
                className="box"
                ref={(el) => (boxesRef.current[index] = el)}
                key={index}
              >
                <img src={src} alt="Scrolling" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gradient-text">
        <div className="font-black text-center bg-clip-text text-[220px] max-md:text-2xl">
          <div className="gradient-texttext">
            ‘상징‘생성해
            <br />
            드립니다.
          </div>
        </div>
        <button
          className="gotosymbol"
          onClick={() => {
            navigate("/sketch");
          }}
        >
          클릭하여 상징 생성하러 가기 &gt;
        </button>
      </div>

      <div className="button-text-main-class">
        <div className="flex gap-5 justify-between self-center px-5 mt-20 w-full text-2xl font-bold max-w-[1512px] text-zinc-100 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="button-text-main">
            <div
              className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5"
              style={{ color: "#b4acac" }}
              onClick={() => {
                navigate("/branding");
              }}
            >
              브랜드 보러가기 &gt;
            </div>
          </div>
          <div className="button-text-main">
            <div
              className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5"
              style={{ color: "#b4acac" }}
              onClick={() => {
                navigate("/business");
              }}
            >
              브랜드 비지니스 모델 &gt;
            </div>
          </div>
          <div className="button-text-main">
            <div
              className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5"
              style={{ color: "#b4acac" }}
              onClick={() => {
                navigate("/salelist");
              }}
            >
              상징 판매장
            </div>
          </div>
          <div className="button-text-main">
            <div
              className="button-text justify-center items-center px-16 py-7 whitespace-nowrap rounded-3xl max-md:px-5"
              style={{ color: "#b4acac" }}
              onClick={() => {
                navigate("/salelist");
              }}
            >
              CONTACT
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center px-16 py-1.5 mt-20 w-full text-xs font-bold whitespace-nowrap bg-neutral-900 text-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-[1688px] max-md:flex-wrap max-md:max-w-full">
          <div className="self-stretch my-auto text-neutral-400">
            Cooperation
          </div>
          <img
            loading="lazy"
            src="/assets/images/underbar6.png"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[108px]"
            alt=""
          />
          <div className="shrink-0 self-stretch my-auto aspect-[2.7] w-[38px] text-neutral-400">
            PBG
          </div>
          <img
            loading="lazy"
            src="/assets/images/underbar3.png"
            className="shrink-0 self-stretch my-auto w-11 aspect-[1.3]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar8.png"
            className="shrink-0 self-stretch my-auto w-11 aspect-[1.22]"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a42bfc30eb6305c7456a0f42dd7fbe1f7ca1ec10490ed4b86f4050ba7559cc0?"
            className="shrink-0 self-stretch my-auto w-10 aspect-[1.59]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar5.png"
            className="shrink-0 self-stretch my-auto aspect-[0.88] w-[23px]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar7.png"
            className="shrink-0 self-stretch my-auto aspect-[2.56] w-[66px]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar4.png"
            className="shrink-0 self-stretch my-auto aspect-[0.93] w-[30px]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar111.svg"
            className="shrink-0 self-stretch bg-blend-multiply aspect-square w-[41px]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar12.png"
            className="shrink-0 self-stretch my-auto aspect-[3.85] w-[84px]"
            alt=""
          />
          <img
            loading="lazy"
            src="/assets/images/underbar2.png"
            className="shrink-0 self-stretch my-auto aspect-[1.75] w-[51px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
