import React from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

export const ArrowBtn = ({ direction, onClick }) => {
  return (
    <button
      className="p-5 bg-green-200 hover:bg-green-400 transition"
      onClick={onClick}
    >
      {direction === "left" ? (
        <ArrowLeft className="text-neutral-950" />
      ) : (
        <ArrowRight className="text-neutral-950" />
      )}
    </button>
  );
};
