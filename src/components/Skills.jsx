import { Chip } from "@nextui-org/react";
export function Skills() {
  const skills = [
    "React",
    "Next",
    "NodeJs",
    "JavaScript",
    "Python",
    "C++",
    "AWS",
    "MongoDB",
    "GraphQL",
  ];
  return (
    <section>
      <h1 className="flex justify-center mb-2">Skills</h1>
      <div className="flex justify-center gap-3">
        {skills.map((skill, index) => {
          return (
            <Chip key={index} className="text-md bg-white/15 shadow-md">
              {skill}
            </Chip>
          );
        })}
      </div>
    </section>
  );
}
