import React from "react";

export const Blob = ({ position }) => {
  return (
    <div
      className={`absolute ${position} h-[700px] w-[700px] bg-green-200/60 rounded-full blur-xl`}
    ></div>
  );
};
