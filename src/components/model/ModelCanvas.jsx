import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import RenderModel from "./RenderModel";

const ModelCanvas = () => {
  return (
    <>
      <Canvas
        dpr={[1, 1.9]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        className="z-0 max-w-96"
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
        <RenderModel />
        <Preload all />
      </Canvas>
    </>
  );
  };
  
  // The X axis is red, the Y axis is green and the Z axis is blue.
export default ModelCanvas;
