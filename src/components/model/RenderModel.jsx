import {
  PerspectiveCamera,
} from "@react-three/drei";
import { Model } from "./Model.jsx";

function RenderModel() {
  return (
    <>
      <group>
        <PerspectiveCamera
          position={[0.91, .91, .9]}
          far={5}
          near={0.1}
          makeDefault
        />
      </group>
      <mesh>
        <ambientLight intensity={1.8} color={"white"}/>
        <directionalLight intensity={2.8} color={"pink"} position={[0,2,3]}/>
        <Model position={[0, 0, 0]} />
      </mesh>
    </>
  );
}

export default RenderModel;