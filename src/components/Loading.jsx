import React from "react";
import { useProgress } from "@react-three/drei";
import { useRender } from "../contexts/RenderContextProvider";

const Loading = () => {
  const { progress } = useProgress();
  const { setRender, end, setEnd, hasScroll, setHasScroll } =
    useRender();
  return (
    <div className="absolute w-full h-full">
      <div className={`${progress === 100 ? "visible" : "invisible"}`}>
        <p className="text-white">Gauri Gera</p>
        <button
          className="bg-white"
          onClick={() => {
            setRender(true);
          }}
        >
          Visit Island?
        </button>
      </div>
    </div>
  );
};

export default Loading;
