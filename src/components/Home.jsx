import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const words = "Welcome to this beautiful world! I am your orator";
const Home = () => {
  const textRef = useRef();

  useGSAP(() => {
    const textContainer = textRef.current;
    textContainer.innerHTML = ""; // Clear the content

    // Animate the text content
    gsap.to(
      {},
      {
        duration: words.length * 0.1, // Adjust the typing speed
        ease: "none",
        onUpdate: function () {
          const length = Math.round(this.progress() * words.length);
          textContainer.innerHTML = words.slice(0, length);
        },
        onComplete: function () {
          textContainer.innerHTML = words;
        },
      }
    );
  });
  return (
    <section
      id="home"
      className="bottom-20 flex justify-center z-20"
    >
      <p
        className="md:text-xl lg:text-3xl font-orbitron text-center invi"
        ref={textRef}
      ></p>
    </section>
  );
};

export default Home;
