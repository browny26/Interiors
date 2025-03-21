import React from "react";
import { LampFill } from "react-bootstrap-icons";

export const Cards = ({ title, subtitle }) => {
  return (
    <div className="flex gap-5 max-w-[300px]">
      <LampFill className="text-black w-[50px] h-[20px]" />
      <div className="flex flex-col gap-3">
        <h6 className="text-h6 font-medium">{title}</h6>
        <p className="font-light text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export const ServicesCards = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between w-full">
      {children}
    </div>
  );
};
