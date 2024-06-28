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
      <div className="flex justify-center gap-1">
        {skills.map((skill, index) => {
          return (
            <Chip key={index} className="text-md bg-transparent/10">
              {skill}
            </Chip>
          );
        })}
      </div>
    </section>
  );
}
