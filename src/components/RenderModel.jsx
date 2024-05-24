import React, { useEffect, useMemo, useRef } from "react";
import {
  PerspectiveCamera,
  Preload,
  ScrollControls,
  Text,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import {
  SpotLightHelper,
  CameraHelper,
  PointLightHelper,
  DirectionalLightHelper,
  Vector3,
  CatmullRomCurve3,
  Shape,
} from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRender } from "../contexts/RenderContextProvider.jsx";
import { Model } from "./Model.jsx";

function RenderModel() {
  // const spotlightRef = useRef();
  // useHelper(spotlightRef, SpotLightHelper, "cyan");
  // const camera = useRef();
  // camera.lookAt([-4,3,-6])
  // useHelper(camera, CameraHelper);
  // const pointlightRef = useRef();
  // useHelper(pointlightRef, PointLightHelper, 1, "cyan");
  // const directionalLightRef = useRef();
  // useHelper(directionalLightRef, DirectionalLightHelper, 2, "cyan");
  // const { camera } = useThree();
  // const tl = gsap.timeline();
  // useEffect(() => {
  //   tl.to(camera.position, {
  //     x: waypoint1[0],
  //     y: waypoint1[1],
  //     z: waypoint1[2],
  //     duration: 3,
  //     scrollTrigger: "#about",
  //     ease: true,
  //   });
  //   // gsap.to("#about");
  // });

  const LINE_POINTS = 859;
  const curve = useMemo(() => {
    return new CatmullRomCurve3(
      [
        new Vector3(7.010824808636369, 1.939916465598, 5.945751822922535),
        new Vector3(1.9710824808636369, 1.99999999999, 6.9751822922535),
        new Vector3(1.1710824808636369, 1.991854916465598, 4.65751822922535),
        new Vector3(-0.78889999999, 1.923451154916, 1.9751822922535),
        new Vector3(-0.77777773262, 1.93451154916, -0.9751822922535),
        // new Vector3(-1.000099999, 0.973451154916, 0.09992922535),
        // new Vector3(-0.659999, 0.523451154916, -1.822922535),
        // new Vector3(-1.397999086, 0.993451154916, -0.51822922535),
        // new Vector3(-1.697999086, 0.999994916, -0.91822922535),
        // new Vector3(-1.997999086, 0.999994916, -1.0035),
        // new Vector3(-1.997999086, 0.999994916, -9.0035),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_POINTS);
  }, [curve]);

  const CameraGroup = useRef();
  const scroll = useScroll();

  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.1);

    return shape;
  }, [curve]);

  useFrame((_state, delta) => {
    const currPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );

    const currPoint = linePoints[currPointIndex];

    // CameraGroup.current.lookAt(new Vector3(-5, 20, 0));

    CameraGroup.current.position.lerp(currPoint, delta * 40);
  });

  //     const tl = new TimelineMax();

  //   // Iterate through the points and add tween animations
  //   for (let i = 0; i < points.length; i++) {
  //     const point = points[i];

  //     // Tween camera position to the next point
  //     tl.to(camera.position, 2, {
  //       x: point.x,
  //       y: point.y,
  //       z: point.z,
  //       ease: Power1.easeInOut,
  //     });
  //   }

  //   // Start the timeline
  //   tl.play();
  // };

  // // Usage
  // const points = [
  //   new Vector3(4.010824808636369, .939916465598, 2.945751822922535),
  //   new Vector3(2.9710824808636369,.923451154916, 2.9751822922535),
  //   new Vector3(1.1710824808636369, 1.991854916465598, 4.65751822922535),
  //   new Vector3(-0.78889999999, 1.923451154916, 1.9751822922535),
  //   new Vector3(-0.77777773262, 1.93451154916, -0.9751822922535),
  //   // Add more points as needed
  // ];

  return (
    <>
      <group>
        <PerspectiveCamera
          position={[4.010824808636369, 3.9999916465598, 3.945751822922535]}
          // position={[1, 2, 2]}
          far={50}
          near={0.1}
          ref={CameraGroup}
          makeDefault
        />
      </group>
      {/* <group position={[1.3, 0.5, 2]}> */}
      {/* <Text
          color={"pink"}
          anchorX={"center"}
          anchorY={"bottom-baseline"}
          fontSize={0.2}
        >
          Hi! My name is Gauri
        </Text> */}
      {/* </group> */}
      {/* <group>
        <mesh frustumCulled>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.5} transparent />
        </mesh>
      </group> */}
      <mesh>
        <pointLight
          intensity={2}
          color={"hsl(23, 90%, 69%)"}
          position={[1, 2, -2]}
        />
        <pointLight
          intensity={9}
          color={"hsl(343, 100%, 39%)"}
          position={[1.57, 5, 2]}
          // ref={pointlightRef}
        />
        <pointLight
          intensity={9}
          color={"hsl(23, 95%, 75%)"}
          position={[-2.9, 6, 0.9]}
        />
        <pointLight intensity={2} color={"green"} position={[1.8, 2, 1.7]} />
        <pointLight
          intensity={10}
          color={"hsl(23, 95%, 75%)"}
          position={[0.7, 2, 1]}
        />
        <pointLight intensity={12} color={"red"} position={[2.4, 1.7, -0.7]} />
        <pointLight
          intensity={9}
          color={"purple"}
          position={[0.34, 1.5, -1.91]}
        />
        <pointLight
          intensity={1}
          color={"hsl(344, 89%, 59%)"}
          position={[2, 1.5, 2]}
        />
        <pointLight
          intensity={15}
          color={"hsl(343, 100%, 39%)"}
          position={[2, 2, 0.4]}
        />
        <spotLight intensity={14} color={"red"} position={[-5, 5, 2.3]} />
        <spotLight intensity={14} color={"red"} position={[2.9, 6.2, -0.3]} />
        {/* <spotLight intensity={4} color={"purple"} position={[2, 5, -3]} /> */}
        <spotLight intensity={18} color={"red"} position={[1, 4, -3]} />
        {/* <spotLight intensity={3} color={"purple"} position={[0, 2, 1]} /> */}
        <spotLight intensity={18} color={"red"} position={[-6, 4, -2]} />
        <pointLight intensity={5} color={"orange"} position={[-1.5, 2.3, 1]} />
        <pointLight
          intensity={8}
          color={"orange"}
          position={[-2.1, 2.7, 1.9]}
          // ref={pointlightRef}
        />
        <spotLight
          intensity={20}
          color={"hsl(11, 80%, 60%)"}
          position={[-3, 4.3, -2]}
          angle={1.57}
          // ref={spotlightRef}
        />
        <directionalLight
          intensity={1}
          color={"black"}
          position={[1.8, 3.2, 1]}
        />
        <directionalLight
          intensity={2}
          color={"purple"}
          position={[1.29, 1.2, -3.4]}
        />
        <spotLight intensity={8} color={"red"} position={[-1, 3, 1]} />
        <directionalLight
          intensity={0}
          color={"amber"}
          position={[-1, 3, -1]}
        />
        <Model position={[0, 0, 0]} />
      </mesh>
    </>
  );
}

// gsap.registerPlugin(ScrollTrigger);
export default RenderModel;
