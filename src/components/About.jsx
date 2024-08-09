import { Code } from "@nextui-org/code";
import { useTheme } from "next-themes";
import ColorThemeContext from "../lib/context/colorThemeContext";
import { useContext } from "react";
import { ColorVariants } from "../lib/colorVariants";

const About = () => {
  return (
    <section className="w-full space-y-5 md:text-xl dark:text-white/75">
      <h4>
        Hi! My name is <CodeTxt text={"Gauri Gera"} />.
      </h4>
      <h5>
        I am an eager-to-learn final year student. I love to solve real world
        problems. I have explored many domains including{" "}
        <CodeTxt text="frontend" />,<CodeTxt text="backend" />,{" "}
        <CodeTxt text="cloud" /> and{" "}
        <CodeTxt text="machine learning" className={"mt-1 md:mt-0"} />.
      </h5>
      <h5>
        I have a knack of leading teams and thoroughly enjoy coordinating with
        others to achieve similar goals.
      </h5>
      <h6>Reading books with a good tea is my favorite way to wind down.</h6>
    </section>
  );
};

const CodeTxt = ({ text, className }) => {
  const { theme } = useTheme();
  const { colorTheme } = useContext(ColorThemeContext);

  return <Code className={`text-lg ${className} ${ColorVariants[colorTheme][theme]["card"]}`}>{text}</Code>;
};

export default About;
