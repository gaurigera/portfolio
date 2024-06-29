import { lazy, useEffect } from "react";
import { OrbitControls, Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const RenderModel = lazy(() => import("./RenderModel"));
import { Message } from "./Message";

const ModelCanvas = () => {
  const { progress, errors } = useProgress();
  useEffect(() => {
    if (errors) {
      return;
    }
  }, [progress, errors]);

  return (
    <div className="sticky bottom-0 top-[84%] max-w-[265px] max-h-[265px]">
      <div className="flex flex-row-reverse">
        <Message />
        <Canvas
          dpr={[1, 1.9]}
          gl={{ preserveDrawingBuffer: true, antialias: true }}
          className="max-w-[255px] max-h-[255px] bg-transparent"
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
