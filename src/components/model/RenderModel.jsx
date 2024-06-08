import React from "react";
import {
  PerspectiveCamera,
} from "@react-three/drei";
import { Model } from "./Model.jsx";

function RenderModel() {
  return (
    <>
      <group>
        <PerspectiveCamera
          position={[1, .91, .951822922535]}
          far={5}
          near={0.1}
          makeDefault
        />
      </group>
      <mesh>
        <ambientLight intensity={1} color={"white"}/>
        <directionalLight intensity={2.4} color={"pink"} position={[0,2,3]}/>
        <Model position={[0, 0, 0]} />
      </mesh>
    </>
  );
}

// gsap.registerPlugin(ScrollTrigger);
export default RenderModel;