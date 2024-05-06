import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section id="about" className="w-full h-screen">
      <div className="flex flex-col md:flex-row w-full h-full p-10 sm:p-20 md:p-32 justify-center items-center md:gap-20">
        <img
          src="./src/assets/gg-img2.jpg"
          alt="My picture"
          className="h-3/4 rounded-2xl"
        />
        <div className="flex flex-col  text-md  text-white font-carltime">
          <h1 className="lg:text-4xl pb-5 font-bold self-center font-poetsen">About</h1>
          <p className="text-md md:text-lg">
            I am a passionate programmer with a keen interest in building
            real-world applications. I am currently in my final year, pursuing a
            Bachelor of Technology (B.Tech) degree in Computer Science. The more
            I learn, the more intrigued I am by the fact that the human
            civilization built machines and gave them eyes, ears and thoughts
            (AI!).
          </p>
          <p className="text-pink-200 p-3">Let's get in touch!</p>
          <ul className="list-none">
            <li className="pb-1">
              <span className="mr-2">&#8227;</span>
              <a href="mailto:gaurigera@gmail.com">
                <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
              </a>
              <span> gaurigera@gmail.com</span>
            </li>
            <li className="pb-1">
              <span className="mr-2">&#8227;</span>
              <a href="tel:+918882398626">
                <FontAwesomeIcon className="text-2xl" icon={faPhone} />
              </a>
              <span> +91 8882398626 (I prefer texting)</span>
            </li>
            <li className="pb-1">
              <span className="mr-2">&#8227;</span>
              <a href="https://github.com/gaurigera">
                <FontAwesomeIcon className="text-2xl" icon={faGithub} />
              </a>
              <span> gaurigera</span>
            </li>
            <li className="pb-1">
              <span className="mr-2">&#8227;</span>
              <a href="https://twitter.com/GauriGera">
                <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
              </a>
              <span> gaurigera</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
