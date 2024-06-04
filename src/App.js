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
          <p className="text-white text-4xl font-p font-bold">Me</p>
          <p className="text-white text-lg md:text-xl font-pretendard font-regular mt-6">
            <a href="https://yonsin.sen.ms.kr" className="text-blue-400">
              연신중학교
            </a>
            에 다니는 학생 문성호입니다.
            <br />
            주로{" "}
            <button
              className="text-blue-400"
              onClick={() => lenis.scrollTo("section#second")}
            >
              쓸데없지만 있으면 좋은 것들
            </button>
            을 만듭니다.
            <br />
            여러 가지 잡다한 것들에 관심이 많습니다.
            <br />
            지금은{" "}
            <a href="https://clovertimes.xyz" className="text-blue-400">
              신문동아리
            </a>
            에서 신문 제작에 몰두하고 있습니다.
          </p>
        </div>
      </section>
      <hr className="between12 mx-6 md:mx-9 mt-20"></hr>
      <section id="second" className="px-7 md:px-10 pt-6">
        <p className="text-white text-4xl font-p font-bold">Projects</p>

        <div className="mt-6 mb-20 flex flex-row overflow-x-auto  whitespace-nowrap">
          <a
            href="https://ybs.sungho.xyz"
            className="project ybs w-64 md:w-[600px] h-52  md:min-w-[600px] md:h-[30rem] inline-flex flex-col pb-5 pr-6 pl-5 justify-between"
          >
            <p className="text-black text-2xl md:text-2xl font-pretendard font-bold mt-6">
              연신중 방송부
            </p>
            <p className="text-black md:text-lg font-pretendard overflow-hidden font-medium mt-6 ">
              교내 방송부 활동을 하며 신청곡과 사연을 받는 웹사이트를 직접
              개발했습니다.
            </p>
          </a>
          <a
            href="https://clovertimes.xyz"
            className="project newspaper w-64 md:w-[600px] ml-5 md:min-w-[600px] h-52 md:h-[30rem] inline-flex pr-6 flex-col pb-5 pl-5 justify-between"
          >
            <p className="text-black text-2xl md:text-2xl font-pretendard font-bold mt-6">
              토끼풀 타임즈
            </p>
            <p className="text-black md:text-lg overflow-hidden font-pretendard font-medium mt-6 ">
              학교에서 신문부를 창설하여 발행인을 맡고 있습니다.
            </p>
          </a>
          <a
            href="https://geupsiktime.netlify.app"
            className="project mealtime w-64 md:w-[45rem] ml-5 h-52 md:min-w-[600px] md:h-[30rem] inline-flex pr-6 flex-col pb-5 pl-5 justify-between"
          >
            <p className="text-white text-2xl md:text-2xl font-pretendard font-bold mt-6">
              급식시간
            </p>
            <p className="text-white md:text-lg font-pretendard overflow-hidden font-medium mt-6 ">
              학교 급식과 시간표를 알려주는 앱을 개발했습니다.
            </p>
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
