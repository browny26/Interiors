import React from "react";

export const Title = ({ title, subtitle, header = "h3", weight = "bold" }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className={`text-${header} font-kansei font-${weight}`}>{title}</h1>
      {subtitle && <p className="font-light leading-[150%]">{subtitle}</p>}
    </div>
  );
};
