import React from "react";

export const StepsItem = ({ number, title, description }) => {
  return (
    <div className="flex gap-5 max-w-[300px]">
      <div className="flex flex-col items-center gap-3">
        <span className="bg-neutral-950 rounded-full h-fit px-3 py-1 text-bg">
          {number}
        </span>
        <div className="bg-gray-400 h-[64px] w-[1px]"></div>
      </div>

      <div className="flex flex-col gap-3">
        <h6 className="text-h6 font-semibold">{title}</h6>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

export const Steps = ({ children }) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};
