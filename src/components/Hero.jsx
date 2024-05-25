import React from "react";
import ModelCanvas from "./ModelCanvas";

function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="src/assets/watercolor-galaxy-background/6484259.jpg"
        className="w-full h-screen absolute top-0 left-0 object-cover"
      />
      <ModelCanvas />
    </section>
  );
}

export default Hero;
