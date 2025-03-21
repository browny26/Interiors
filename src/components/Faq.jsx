import React from "react";
import { useState } from "react";
import { Dash, Plus } from "react-bootstrap-icons";

export const FaqItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-400">
      <button
        className="w-full flex justify-between items-center p-5 text-left"
        onClick={onClick}
      >
        <span className="text-h6">{title}</span>
        {isOpen ? <Dash size={20} /> : <Plus size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 font-light leading-[150%] text-neutral-500">
          {content}
        </div>
      )}
    </div>
  );
};

export const Faq = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onClick: () => handleToggle(index),
        })
      )}
    </div>
  );
};
