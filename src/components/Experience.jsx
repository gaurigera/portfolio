import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="w-full font-mono">
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="font-poetsen text-3xl p-3">My Experience</h1>
        <ExperienceCards />
      </div>
    </section>
  );
};

function ExperienceCards() {
  const experience = [
    {
      duration: "April 2024 - July 2024",
      title: "The Assigner",
      role: "Frontend Dev Intern",
      points: [
        "Designed and developed Frontend of the official website.",
        "Deployed website on Hostinger",
      ],
    },
  ];

  return (
    <div>
      {experience.map((item) => (
        <div
          key={item.index}
          className="backdrop-blur-sm bg-white/5 p-5 rounded-xl m-2 border-2 border-pink-50/5"
        >
          <div className="flex flex-row justify-between pb-1">
            <h1 className="text-2xl font-poetsen">{item.role}</h1>
            <h1>{item.title}</h1>
          </div>
          <ul className="list-inside list-disc">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
