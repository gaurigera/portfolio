import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { BulletArrow } from "./icons/BulletArrow";
import useMediaQuery from "../hooks/useMediaQuery";
import { ColorVariants } from "../lib/colorVariants";
import { useTheme } from "next-themes";
import { useContext } from "react";
import ColorThemeContext from "../lib/context/colorThemeContext";

export const Experience = () => {
  const {theme} = useTheme()
  const {colorTheme} = useContext(ColorThemeContext)

  const ExperienceList = [
    {
      role: "Software Engineer Intern",
      company: "Ciena",
      duration: "January 2025 - Present",
      points: [
        `Contributed to the development of an AI-powered application utilizing a .NET backend and an Angular frontend.`,
        `Enhanced reliability and performance by writing and executing comprehensive unit tests.`,
        `Implemented small to medium-sized features to enhance application capabilities.`,
        `Gained practical knowledge of operational terminologies of Large Language Models (LLMs) within a commercial software environment.`,
      ],
    },
    {
      role: "Web Developer Intern",
      company: "The Assigner",
      duration: "April 2024 - July 2024",
      points: [
        `Working in a startup allowed me to explore many domains. I was not only responsible for delivering good & clean code but also project and team planning.`,
        `Created 30+ reusable react components, handled state management and data fetching.`,
        `Designed and implemented the required architecture in AWS (using EC2, S3 etc) along with deployment on Hostinger using CI/CD pipelining.`,
        `Planned an optimal backend architecture along with implementation in NodeJs.`,
      ],
    },
  ];

  return (
    <section>
      <Card className="bg-transparent shadow-sm" shadow="none">
        <CardHeader>
          <h1 className={`${ColorVariants[colorTheme][theme]["text"]}`}>Experience</h1>
        </CardHeader>
        <CardBody>
          <div>
            {ExperienceList.map((item, index) => {
              return <ExperienceItem item={item} key={index} />;
            })}
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

const ExperienceItem = ({ item }) => {
   const isMobile = useMediaQuery("(max-width: 768px)");
   
  return (
    <div className="space-y-1">
      {isMobile ? (
        <div>
          <h2>{item.role}</h2>
          <h2>{item.company}</h2>
          <h2 className="text-end">{item.duration}</h2>
        </div>
      ) : (
        <div className="flex text-lg justify-between">
          <div className="flex space-x-1">
            <h2>{item.role} |</h2>
            <h2>{item.company}</h2>
          </div>
          <div>
            <h2>{item.duration}</h2>
          </div>
        </div>
      )}
      <div className="pl-1 space-y-0.5">
        {item.points.map((point, index) => {
          return (
            <div className="flex items-baseline space-x-1" key={index}>
              <span>
                <BulletArrow />
              </span>
              <p>{point}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
