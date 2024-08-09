import { Chip } from "@nextui-org/react";
import { useContext } from "react";
import ColorThemeContext from "../lib/context/colorThemeContext";
import { useTheme } from "next-themes";
import { ColorVariants } from "../lib/colorVariants";
export function Skills() {
  const skills = [
    "React",
    "Next",
    "Node",
    "JavaScript",
    "Python",
    "C++",
    "AWS",
    "MongoDB",
    "GraphQL",
  ];

  const { colorTheme } = useContext(ColorThemeContext);
  const { theme } = useTheme();

  return (
    <section className="relative">
      <h1
        className={`flex justify-center mb-2 ${ColorVariants[colorTheme][theme]["text"]}`}
      >
        Skills
      </h1>
      <div className="flex flex-wrap gap-2 justify-center">
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
