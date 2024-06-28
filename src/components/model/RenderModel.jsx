import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { Model } from "./Model.jsx";
import { CameraHelper } from "three";
import { useRef } from "react";
import { useTheme } from "next-themes";

function RenderModel() {
  // const camera = useRef();
  // useHelper(camera, CameraHelper);
  // console.log(camera);
  const {theme } = useTheme();
  return (
    <>
      <group>
        <PerspectiveCamera
          position={[
            0.2365220670567648, 0.6750338605976607, 0.7428696617043932,
          ]}
          far={5}
          near={0.1}
          makeDefault
          // ref={camera}
        />
      </group>
      <mesh>
        <ambientLight intensity={theme === 'dark' ? 1.2 : 3.4} color={"white"} />
        <directionalLight intensity={2.8} color={"pink"} position={[0, 2, 3]} />
        <Model position={[0, 0, 0]} />
      </mesh>
    </>
  );
}

export default RenderModel;