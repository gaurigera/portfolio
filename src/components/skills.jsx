const RenderSkills = () => {
  const skills = [
    "React",
    "Javascript",
    "Python",
    "MySql",
    "MongoDB",
    "Kotlin",
    "AWS",
    "TailwindCSS",
    "Java",
    "NextJs",
    "Git",
  ];

  return (
    <>
      <div className="pt-4 pb-4 w-full flex flex-col text-white justify-center items-center">
        <p className="text-3xl font-poetsen">Technologies I work with:</p>
        <div>
          <ul className="m-auto block max-w-3xl items-center place-content-center">
            {skills.map((skill, i) => (
              <li className="m-4 inline-block text-pink-200" key={i}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RenderSkills;
