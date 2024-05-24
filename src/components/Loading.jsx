import React from "react";
import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="">
        <GridLoader
          color="pink" />
      </div>
    </div>
  );
};

export default Loading;
