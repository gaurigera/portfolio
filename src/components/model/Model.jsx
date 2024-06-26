/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AonoZan (https://sketchfab.com/aonozan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/baby-robot-769ba821f3594e4aaa905baf417e04fe
Title: Baby Robot
*/
import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/portfolio/model/baby_robot/scene.gltf"
  );

  // useGSAP(() => {
  //   tl.current = gsap.timeline({ repeat: -1, yoyo: true });
  //   tl.current
  //     .to(headRef.current.rotation, { x: -0.443, duration: 1 })
  //     .to(headRef.current.rotation, { x: -0.593, duration: 1 });
  // });
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.048}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[1.194, 0.513, 0.771]}
            rotation={[1.264, -0.154, -1.023]}
            scale={0.461}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["blue.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.pink}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["blue.003"]}
            />
          </group>
          <group
            // ref={headRef}
            position={[-0.122, 5.396, 0.088]}
            rotation={[-0.539, 0.394, 0.302]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials["blue.008"]}
            />
            <group
              position={[-1.412, 1.911, 0.207]}
              rotation={[2.841, -0.596, 2.577]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials["blue.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials.pink}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.blue}
              position={[2.908, -0.057, -0.087]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.308, 0.216, 0.288]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.eyes}
              position={[-0.85, -0.132, 1.931]}
              rotation={[0.05, -0.244, 0.132]}
              scale={0.761}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.face}
              position={[0, 0, 0.628]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.461, 0.678, 0.431]}
            />
          </group>
          <group
            position={[1.116, 2.905, 0.037]}
            rotation={[-1.962, -0.409, -2.036]}
            scale={0.461}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials["blue.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_23.geometry}
              material={materials.yellow}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-1.435, 1.837, 0.115]}
            rotation={[-2.644, -0.516, 0.844]}
            scale={0.461}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials["blue.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials.yellow}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials.green}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["blue.001"]}
          />
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.green}
            scale={3.25}
          /> */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.trans}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.pink}
            position={[-0.046, 1.632, 0.3]}
            rotation={[-0.715, 0.406, 0.71]}
            scale={0.198}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/model/baby_robot/scene.gltf");
