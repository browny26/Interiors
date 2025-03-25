import React, { useState } from "react";
import { PeaceFill, Quote } from "react-bootstrap-icons";

export const CarouselName = ({ name, company }) => {
  return (
    <div className="flex gap-5 items-center text-white">
      <PeaceFill className="w-9 h-9" />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xs">{name}</p>
        <p className="text-[8px] opacity-60">{company}</p>
      </div>
    </div>
  );
};

export const CarouselCard = ({ content, name, company }) => {
  return (
    <div className="flex flex-col justify-between gap-12 bg-green-900 text-white w-[350px] h-[350px] p-10">
      <Quote className="h-6 w-6" />
      <p className="font-semibold">{content}</p>
      <CarouselName name={name} company={company} />
    </div>
  );
};

export const Carousel = ({ children, currentIndex }) => {
  const totalSlides = React.Children.count(children);
  const itemsPerView = 3; // Mostriamo 3 elementi alla volta

  return (
    <div className="w-[1150px] overflow-hidden">
      <div
        className="flex gap-6 bg-green-50 p-2 transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          width: `${Math.ceil(totalSlides / itemsPerView) * 100}%`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="w-[350px] flex-shrink-0">{child}</div>
        ))}
      </div>
    </div>
  );
};
