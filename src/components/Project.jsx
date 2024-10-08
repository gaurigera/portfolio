import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { DotFilled } from "./icons/DotFilled";
import { ExternalLink } from "./icons/ExternalLink";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ColorThemeContext from "../lib/context/colorThemeContext";
import { ColorVariants } from "../lib/colorVariants";
import { useTheme } from "next-themes";

export function Projects() {
  const { colorTheme } = useContext(ColorThemeContext);
  const { theme } = useTheme();

  const ProjectList = [
    {
      bullet: "green",
      selection: "selection:text-green-500 dark:selection:text-green-700",
      heading: "Chatter",
      points: [
        "Implemented a realtime chat system using socket.io",
        "Used NextJs for frontend to create an optimal UI.",
      ],
      link: "https://github.com/gaurigera/Chatter",
      headingColor: "text-green-500",
    },
    {
      bullet: "blue",
      selection: "selection:text-blue-300 dark:selection:text-blue-700",
      heading: "KanbanFlo",
      points: [
        "Implemented a trello like project management application using MERN stack.",
        "Handled users and their different projects, allowing different roles such as viewing, commenting and editing.",
      ],
      link: "https://github.com/gaurigera/KanbanFlo",
      headingColor: "text-blue-500",
    },
  ];

  return (
    <section className="space-y-1 px-3">
      <div>
        <h1 className={`${ColorVariants[colorTheme][theme]["text"]}`}>
          Projects
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ProjectList.map((project, index) => {
          return <ProjectItem {...project} key={index} />;
        })}
      </div>
    </section>
  );
}

const ProjectItem = ({
  bullet,
  selection,
  heading,
  headingColor,
  points,
  link,
}) => {
  return (
    <Card
      shadow="none"
      className={`space-y-0.5 shadow-card bg-transparent ${selection}`}
    >
      <CardHeader>
        <h2 className={`${headingColor}`}>{heading}</h2>
      </CardHeader>
      <CardBody>
        {points.map((point, index) => {
          return (
            <div className="flex" key={index}>
              <div>
                <DotFilled fill={bullet} />
              </div>
              <p className="text-xs">{point}</p>
            </div>
          );
        })}
      </CardBody>
      <CardFooter>
        <Link className="text-xs" to={link}>
          <ExternalLink />
        </Link>
      </CardFooter>
    </Card>
  );
};
