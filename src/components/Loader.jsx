import { React } from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progess } = useProgress();
  return (
    <Html>
      <span>Loading</span>
      <p className="text-white text-md">{progess}%</p>
    </Html>
  );
};

export default Loader;
