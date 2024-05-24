import React, { useEffect, useMemo, useRef } from "react";
import {
  OrbitControls,
  Preload,
  ScrollControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRender } from "../contexts/RenderContextProvider.jsx";
import RenderModel from "./RenderModel.jsx";

const ModelCanvas = () => {
  const { render } = useRender();
  return (
    <>
      <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          target={[-1, 0.9999, -3]}
          makeDefault
        />
        <ScrollControls pages={render ? 20 : 0} damping={0.03}>
          {/* <OrbitControls
              enableZoom={true}
              enableRotate={true}
              target={[-1, 0.9999, -3]}
            /> */}
          <RenderModel />
        </ScrollControls>
        //The X axis is red, the Y axis is green and the Z axis is blue.
        {/* <axesHelper args={[10]} /> */}
        <Preload all />
      </Canvas>
    </>
  );
};

export default ModelCanvas;
