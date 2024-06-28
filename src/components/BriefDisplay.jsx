import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Link } from "react-router-dom";

export function BriefDisplay() {
  return (
    <Card
      className="w-1/3 p-1 lg:p-3 border-none bg-background/40 dark:bg-transparent/15 fixed mt-7 left-5 z-40"
      shadow="sm"
      isBlurred={true}
      radius="lg"
    >
      <CardHeader>
        <h1 className="font-munroLye text-lg">Quick Overview</h1>
      </CardHeader>
      <CardBody className="flex flex-col">
        <Contact />
        <EducationSection />
      </CardBody>
    </Card>
  );
}

const Contact = () => {
  const contact = [
    {
      type: "Email",
      value: "gaurigera@gmail.com",
      link: "gaurigera@gmail.com",
      color: "decoration-blue-300",
    },
    {
      type: "LinkedIn",
      value: "gaurigera",
      link: "www.linkedin.com/in/gauri-gera-b7a224262",
      color: "decoration-orange-400",
    },
    {
      type: "X(twitter)",
      value: "gaurigera",
      link: "https://twitter.com/GauriGera",
      color: "decoration-rose-400",
    },
  ];
  return (
    <div className="w-full -mt-2">
      <h2 className="font-munroLye">Contact</h2>
      <div className="space-y-0.5">
        {contact.map((item, index) =>
          <div className="flex gap-1 pl-1" key={index}>
            <span>{item.type}/ </span>
            <a
              href={item.link}
              className={`underline ${item.color}`}
            >
              {item.value}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="w-full mt-2">
      <h2 className="font-munroLye">Education</h2>
      <div className="mb-1 pl-1">
        <div className="w-full flex justify-between text lg:text-md">
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
        <div className="w-full flex justify-between">
          <h3 className="italic">DPSSL</h3>
          <span>87.4%</span>
        </div>
        <div className="text-xs text-justify pl-1 space-y-1">
          <p>Science student (Physics, Chemistry and Math)</p>
        </div>
      </div>
    </div>
  );
};
