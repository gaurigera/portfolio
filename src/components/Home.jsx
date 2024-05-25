import React from "react";

const words = "Welcome to this beautiful world! I am your orator";
const Home = () => {
  return (
    <section id="home" className="absolute bottom-20 w-full flex justify-center">
      <p className="md:text-xl lg:text-3xl font-sourceCode text-green-600 text-center">{words}</p>
    </section>
  );
};

export default Home;
