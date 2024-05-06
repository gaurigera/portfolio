import React from "react";
import ModelCanvas from "./RenderModel";
import Loading from "./Loading";

function Hero() {
  return (
    <section className="w-full h-screen">
      {/* <div className="w-full h-full flex flex-col justify-centre p-10 sm:p-20 md:p-36 lg:flex-row">
        <div className="grid grid-cols-1 grid-rows-2 text-white font-mono text-center p-5 lg:w-1/2">
          <h1 className="font-bold text-3xl min-h-2 place-self-center lg:pb-2 md:text-4xl">
            Hi! I am Gauri
          </h1>
          <p className="text-pink-100">
            Glad you found me!
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-1/2">
          <img
            src="./src/assets/gg-img.jpg"
            alt="my image"
            className="min-h-0.5 sm:h-1/4 md:h-4/5 rounded-md"
          />
          <p className="text-center text-pink-200 font-mono text-xs pt-2">
            My Brother and I
          </p>
        </div>
      </div> */}
      <div className="h-full">
        <Loading />
        <ModelCanvas />
      </div>
    </section>
  );
}

export default Hero;
