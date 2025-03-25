import React, { useState } from "react";
import { Title } from "../../../components/Title";
import { ArrowBtn } from "../../../components/ArrowBtn";
import { CarouselCard, Carousel } from "../../../components/Carousel";

const AboutUs = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const totalSlides = 4; // Cambia in base agli elementi reali
  const itemsPerView = 3;

  const handlePreviews = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
      console.log(carouselIndex - 1);
    }
  };

  const handleNext = () => {
    if (carouselIndex < totalSlides - itemsPerView) {
      setCarouselIndex(carouselIndex + 1);
      console.log(carouselIndex + 1);
    }
  };

  return (
    <section className="relative flex flex-col lg:flex-row gap-20 py-20 mb-60 lg:mb-0">
      <div>
        <img
          src="/image_6.png"
          className="flex-1 h-[200px] lg:h-auto object-cover object-bottom"
        />
        <div className="mt-3 flex gap-4">
          <ArrowBtn direction="left" onClick={handlePreviews} />
          <ArrowBtn direction="right" onClick={handleNext} />
        </div>
      </div>
      <div className="flex-1">
        <Title title="What Our Customers Say About Us" weight="bold" />
      </div>
      <div className="absolute -bottom-40 lg:bottom-20 right-0">
        <Carousel currentIndex={carouselIndex}>
          <CarouselCard
            content="Achieve the perfect balance of ambient, task, and accent design for a functional atmosphere."
            name="Christian Greco"
            company="Greco Interiors"
          />
          <CarouselCard
            content="Modern designs with a touch of elegance, making every space functional and stylish."
            name="Elena Rossi"
            company="Rossi Interiors"
          />
          <CarouselCard
            content="Our designs are carefully crafted to ensure aesthetic and practicality meet seamlessly."
            name="Marco Bianchi"
            company="Bianchi Designs"
          />
          <CarouselCard
            content="Innovative spaces designed to enhance comfort and usability."
            name="Sophia Verdi"
            company="Verdi Architects"
          />
          <CarouselCard
            content="Balancing creativity and practicality for interiors that inspire."
            name="Luca Moretti"
            company="Moretti & Co."
          />
        </Carousel>
      </div>
    </section>
  );
};

export default AboutUs;
