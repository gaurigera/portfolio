import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="h-screen">
      <div className="flex flex-col items-center h-full text-md p-10 sm:p-20 md:p-36 text-white font-mono">
        <h1>Thank you for coming this far!</h1>
        <p>I urge you to look at to take a look at my CV.</p>
        <button className=" border-2 border-fuchsia-200 p-3">
          <a href="https://drive.google.com/file/d/1myM7xOTHf6qaWAOvbSgKRcu7aD3sBVp7/view?usp=drive_link">
            Click here!
          </a>
        </button>
      </div>
    </section>
  );
};

export default Resume;
