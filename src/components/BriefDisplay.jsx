import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Link } from "react-router-dom";

export function BriefDisplay() {
  return (
    <Card
      className="p-1 lg:p-3 border-none bg-background/40 dark:bg-transparent/15 sticky"
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
  return (
    <div className="w-full -mt-2">
      <h2 className="font-munroLye">Contact</h2>
      <div className="flex gap-1 pl-1">
        <span>Email:</span>
        <a href="mailto:gaurigera@gmail.com">gaurigera@gmail.com</a>
      </div>
      <div className="flex gap-4 underline pl-1">
        <Link to={`www.linkedin.com/in/gauri-gera-b7a224262`}>LinkedIn</Link>
        <Link to={`https://twitter.com/GauriGera`}>X(twitter)</Link>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="w-full mt-2">
      <h2 className="font-munroLye">Education</h2>
      <div className="mb-1 pl-1">
        <div className="w-full flex justify-between">
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
