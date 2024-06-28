import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { DotFilled } from "./icons/DotFilled";

export function Projects() {
  const ProjectList = [{}];

  return (
    <section className="space-y-1">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
}

const ProjectItem = () => {
  return (
    <Card shadow="none" className="space-y-0.5 shadow-card bg-transparent">
      <CardHeader>
        <h2 className="text-pink-400">Heading</h2>
      </CardHeader>
      <CardBody>
        <div className="flex">
          <div>
            <DotFilled fill={"green"} />
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            blanditiis culpa explicabo illo totam ad earum nulla voluptate
            inventore, cum pariatur veritatis non omnis est facere itaque at
            neque ipsa!
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <Link>wjw</Link>
      </CardFooter>
    </Card>
  );
};
