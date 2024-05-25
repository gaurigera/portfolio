import React from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RenderModel from "../RenderModel.jsx";

const ModelCanvas = () => {
  return (
    <>
      <Canvas
        dpr={[1, 1.9]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}/>
        <RenderModel />
        //The X axis is red, the Y axis is green and the Z axis is blue.
        {/* <axesHelper args={[10]} /> */}
        <Preload all />
      </Canvas>
    </>
  );
};

export default ModelCanvas;
