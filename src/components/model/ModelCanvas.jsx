import { lazy, useEffect, useRef, useState } from "react";
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

  const canvasRef = useRef(null);
  const [key, setKey] = useState(0); // State to force re-render of the Canvas

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (!canvasElement) return;

    const handleContextLost = (event) => {
      event.preventDefault();
      console.error("WebGL context lost.");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored.");
      // Reinitialize or reload your 3D scene here
      setKey((prevKey) => prevKey + 1); // Force re-render by updating key
    };

    canvasElement.addEventListener(
      "webglcontextlost",
      handleContextLost,
      false
    );
    canvasElement.addEventListener(
      "webglcontextrestored",
      handleContextRestored,
      false
    );

    return () => {
      canvasElement.removeEventListener("webglcontextlost", handleContextLost);
      canvasElement.removeEventListener(
        "webglcontextrestored",
        handleContextRestored
      );
    };
  }, []);

  return (
    <div className="border-0 sticky top-full bottom-0 max-w-[265px] max-h-[265px] -z-10">
      <div className="flex flex-row-reverse">
        <Message />
        <Canvas
          ref={canvasRef}
          dpr={[1, 1.9]}
          frameloop="demand"
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

export default ModelCanvas;
