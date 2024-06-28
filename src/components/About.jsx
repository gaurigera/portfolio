import { Code } from "@nextui-org/code";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-2 text-xl text-white/75">
      <h4>
        Hi! My name is <Code>Gauri Gera</Code>. Glad you found this page!
      </h4>
      <h5>
        I am an eager-to-learn final year student. I love to solve real world
        problems. I have explored many domains including <Code>frontend</Code>,
        <Code>backend</Code>, <Code>cloud</Code> and
        <Code>machine learning</Code>.
      </h5>
      <h5>
        I have a knack of leading teams and thoroughly enjoy coordinating with
        others to achieve similar goals.
      </h5>
      <h6>
        My hobbies include reading books, listening to music and exercising.
      </h6>
    </section>
  );
};

export default About;
