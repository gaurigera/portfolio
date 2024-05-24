import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useRender } from "../contexts/RenderContextProvider";

const Landing = () => {
  const textRef = useRef();
  const buttonRef = useRef();
  gsap.registerPlugin();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "ease-in-out",
      }
    ).fromTo(
      buttonRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "ease-in" }
    );
  }, []);
  const { render, setRender, end, setEnd, hasScroll, setHasScroll } = useRender();

  return (
    <section>
      <div className={`${"absolute p-10 text-white/85 z-50 bottom-4"} ${render ? "invisible": ""}`}>
        <div className="flex flex-col font-bold gap-2 p-2" ref={buttonRef}>
          <button onClick={() => {setRender(true)}}>
            <h2>Wander through Island</h2>
          </button>
          <button>Head directly to portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
