import { Code } from "@nextui-org/code";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-2 text-xl dark:text-white/75">
      <h4>
        Hi! My name is <CodeTxt text={"Gauri Gera"} />. Glad you found this
        page!
      </h4>
      <h5>
        I am an eager-to-learn final year student. I love to solve real world
        problems. I have explored many domains including{" "}
        <CodeTxt text="frontend" />,<CodeTxt text="backend" />,{" "}
        <CodeTxt text="cloud" /> and <CodeTxt text="machine learning" />.
      </h5>
      <h5>
        I have a knack of leading teams and thoroughly enjoy coordinating with
        others to achieve similar goals.
      </h5>
      <h6>
        Reading books with a good tea is my favorite way to wind down.
      </h6>
    </section>
  );
};

const CodeTxt = ({ text }) => {
  return <Code className="text-lg">{text}</Code>;
};

export default About;
