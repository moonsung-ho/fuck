import gsap from "gsap";
import "./App.css";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
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

  gsap.fromTo(
    "body",

    {
      backgroundColor: "rgb(255 251 235)",
    },
    {
      scrollTrigger: {
        trigger: "#bottom-first",
        scrub: true,
        markers: true,
        end: "bottom bottom",
      },
      backgroundColor: "rgb(28 25 23)",
    }
  );

  return (
    <div className="App">
      <header className=" h-screen  relative pt-6">
        <h1 className="title font-dm font-bold absolute pl-8 md:pl-14 text-nowrap text-5xl md:text-6xl bottom-1/2">
          Sungho Moon
          <p className="text-xl md:text-2xl font-pretendard mt-2 font-semibold">
            세상을 개발합니다.
          </p>
        </h1>
      </header>
      <section id="before-first">
        <hr className=" mx-6 md:mx-9"></hr>
      </section>
      <section id="first" className="px-7 md:px-10 pt-6 mb-52">
        <div>
          <p className="text-white text-5xl font-p font-bold">About</p>
          <p className="text-white text-xl md:text-2xl font-nm font-medium mt-6">
            자타공인 '또라이'. 하지만 미친 사람이 결국 세상을 바꾼다고 믿습니다.
            <br />
            14세, 일천한 인생이지만 미래를 위해 노력합니다.
            <br />
            어쩌구
          </p>
        </div>
      </section>
      <hr className=" mx-6 md:mx-9 mt-20"></hr>
      <section id="second" className="px-7 md:px-10 pt-6">
        <div>
          <p className="text-white text-5xl font-p font-bold">Projects</p>
          <div className="flex mb-96"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
