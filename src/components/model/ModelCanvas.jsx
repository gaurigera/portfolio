import React from "react";
import { OrbitControls, Preload, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RenderModel from "./RenderModel";
import Layout from "../Layout";

const ModelCanvas = () => {
  return (
    <>
      <img
        src="src/assets/watercolor-galaxy-background/6484259.jpg"
        className="w-full h-full absolute top-0 left-0 object-cover z-0"
      />
      <Canvas
        dpr={[1, 1.9]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        className="z-0"
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
        <ScrollControls pages={8} damping={0.2} horizontal>
          <Layout />
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
