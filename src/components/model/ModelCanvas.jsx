import { lazy } from "react";
import { OrbitControls, Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const RenderModel = lazy(() => import("./RenderModel"));
import { Message } from "./Message";

const ModelCanvas = () => {
  const { progress } = useProgress();
  
  return (
    <div className="relative">
      <div className="fixed left-72 -bottom-48 h-1/2 w-1/2">
        {progress === 100 && <Message />}
      </div>
      <div className="fixed -left-10 -bottom-44 h-1/2 w-1/2 xl:left-5">
        <Canvas
          dpr={[1, 1.9]}
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          className="max-w-96"
        >
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
          />
          <RenderModel />
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

// The X axis is red, the Y axis is green and the Z axis is blue.
export default ModelCanvas;
