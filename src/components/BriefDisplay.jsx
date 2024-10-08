import { Card, CardHeader, CardBody } from "@nextui-org/card";
import useMediaQuery from "../hooks/useMediaQuery";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useTheme } from "next-themes";
import { ColorVariants } from "../lib/colorVariants";
import { useContext } from "react";
import ColorThemeContext from "../lib/context/colorThemeContext";

export function BriefDisplay() {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const { theme } = useTheme();
  const { colorTheme } = useContext(ColorThemeContext);
 
  return (
    <Card
      className={`h-fit p-1 lg:p-3 border-none ${
        ColorVariants[colorTheme][theme]["gradient"]
      } ${isTablet ? "" : " top-20 sticky w-full mt-7"} `}
      shadow="sm"
      isBlurred={true}
      radius="xl"
    >
      <CardHeader>
        <h1
          className={`font-munroLye text-lg ${ColorVariants[colorTheme]["light"]["text"]}`}
        >
          Quick Overview
        </h1>
      </CardHeader>
      <CardBody className="flex flex-col">
        <ScrollShadow
          hideScrollBar
          className={`${isTablet ? "" : "max-h-96"} -mt-1 pt-2 pb-6`}
        >
          <Contact />
          <EducationSection />
        </ScrollShadow>
      </CardBody>
    </Card>
  );
}

const Contact = () => {
  const contact = [
    {
      type: "Email",
      value: "gaurigera@gmail.com",
      link: "mailto:gaurigera@gmail.com",
      color: "decoration-blue-300",
    },
    {
      type: "LinkedIn",
      value: "gaurigera",
      link: "https://www.linkedin.com/in/gauri-gera-b7a224262",
      color: "decoration-orange-500",
    },
    {
      type: "X(twitter)",
      value: "gaurigera",
      link: "https://twitter.com/GauriGera",
      color: "decoration-rose-800",
    },
  ];
  return (
    <div className="w-full -mt-2">
      <h2 className="font-munroLye">Contact</h2>
      <div className="space-y-0.5">
        {contact.map((item, index) => (
          <div className="flex gap-1 pl-1" key={index}>
            <span>{item.type}/ </span>
            <a href={item.link} target="_blank" className={`underline ${item.color}`}>
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="w-full mt-2">
      <h2 className="font-munroLye">Education</h2>
      <div className="mb-1 pl-1">
        <div className="w-full md:flex justify-between text lg:text-md">
          <h3 className="italic">Amity University, Noida</h3>
          <span>9.41 CGPA</span>
        </div>
        <div className="text-xs text-justify pl-1 space-y-1">
          <p>B.Tech CSE student of 4th year; awarded with scholarship</p>
          <p>
            Course work: Algorithms, Data Structures, Operating Systems,
            Computer Networks, Databases, Cloud computing
          </p>
        </div>
      </div>
      <div className="pl-1">
        <div className="w-full md:flex justify-between">
          <h3 className="italic">DPS Sushant Lok</h3>
          <span>87.4%</span>
        </div>
        <div className="text-xs text-justify pl-1 space-y-1">
          <p>Science student (Physics, Chemistry and Math)</p>
        </div>
      </div>
    </div>
  );
};
