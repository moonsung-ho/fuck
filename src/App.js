import gsap from "gsap";
import "./App.css";
import { useEffect, useState, useMemo, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
const lenis = new Lenis();

function App() {
  gsap.registerPlugin(ScrollTrigger);
  lenis.on("scroll", (e) => {
    ScrollTrigger.update();
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  useEffect(() => {
    gsap.fromTo(
      "body",
      {
        backgroundColor: "rgb(255 251 235)",
        duration: 5,
      },
      {
        scrollTrigger: {
          trigger: ".title",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        duration: 5,
        backgroundColor: "rgb(28 25 23)",
      }
    );
  }, []);

  return (
    <ReactLenis root className="App">
      <header className=" h-screen  relative pt-6">
        <h1 className="title font-dm font-bold absolute pl-8 md:pl-14  text-nowrap text-5xl md:text-6xl bottom-1/2">
          Sungho Moon
          <p className="text-xl md:text-2xl font-pretendard mt-2 font-semibold">
            세상을 개발합니다.
          </p>
        </h1>
      </header>
      <section className="before-first">
        <hr className=" mx-6 md:mx-9"></hr>
      </section>
      <section id="first" className="px-7 md:px-10 pt-6 mb-52">
        <div>
          <p className="text-white text-4xl font-p font-bold">About</p>
          <p className="text-white text-lg md:text-xl font-pretendard font-regular mt-6">
            학생 문성호입니다.
            <br />
            주로 쓸데없지만 있으면 도움이 되는 것들을 만듭니다.
            <br />
          </p>
        </div>
      </section>
      <hr className="between12 mx-6 md:mx-9 mt-20"></hr>
      <section id="second" className="px-7 md:px-10 pt-6">
        <p className="text-white text-4xl font-p font-bold">Projects</p>
        <div className="horizontalparent">
          <a href="https://ybs.sungho.xyz">
            <div className="horizontal flex mb-20 mt-6 h-52 md:h-[30rem] overflow-hidden overflow-x-hidden overflow-y-hidden w-64 md:w-fit sticky top-0">
              <div className="project ybs w-[45rem] aspect-4/3 h-full pl-6 relative">
                <p className="text-black text-2xl md:text-2xl font-pretendard font-bold mt-6">
                  연신중 방송부
                </p>
                <p className="text-black absolute bottom-5 md:text-lg font-pretendard font-medium mt-6 ">
                  교내 방송부 활동을 하며 신청곡과 사연을 받는 웹사이트를 직접
                  개발했습니다.
                </p>
              </div>
            </div>
          </a>
          <a href="https://clovertimes.xyz">
            <div className="horizontal flex mb-20 mt-6 h-52 md:h-[30rem] overflow-hidden overflow-x-hidden overflow-y-hidden w-64 md:w-fit sticky top-0 ml-6">
              <div className="project newspaper w-[45rem] aspect-4/3 h-full pl-6 relative">
                <p className="text-black text-2xl md:text-2xl font-pretendard font-bold mt-6">
                  토끼풀 타임즈
                </p>
                <p className="text-black absolute bottom-5 md:text-lg font-pretendard font-medium mt-6">
                  학교에서 신문부를 창설하여 발행인 역할을 맡고 있습니다.
                </p>
              </div>
            </div>
          </a>
          <a href="https://geupsiktime.netlify.app">
            <div className="horizontal flex mb-20 mt-6 h-52 md:h-[30rem] overflow-hidden overflow-x-hidden overflow-y-hidden w-64 md:w-fit sticky top-0 ml-6">
              <div className="project mealtime w-[45rem] aspect-4/3 h-full pl-6 relative">
                <p className="text-white text-2xl md:text-2xl font-pretendard font-bold mt-6">
                  급식시간
                </p>
                <p className="text-white absolute bottom-5 md:text-lg font-pretendard font-medium mt-6">
                  학교 급식과 시간표를 알려주는 앱을 개발했습니다.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <hr className=" mx-6 md:mx-9"></hr>
      <section id="third" className="px-7 md:px-10 pt-6">
        {/* small contact bar */}
        <div className="flex justify-between mb-5">
          <p className=" text-white text-lg font-pretendard font-regular">
            &#169;문성호
          </p>
          <div className="flex">
            <a href="https://github.com/moonsung-ho" className=" text-blue-400">
              Github
            </a>
            <a
              href="https://x.com/Sungho__Moon"
              className="text-blue-400 ml-2 md:ml-5"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/sunghotrue/"
              className="text-blue-400 ml-2 md:ml-5"
            >
              Instagram
            </a>
            <a
              href="mailto:sungho.moon@aol.com"
              className="text-blue-400 ml-2 md:ml-5"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}

export default App;
