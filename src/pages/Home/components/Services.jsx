import React from "react";
import { Title } from "../../../components/Title";
import { Cards, ServicesCards } from "../../../components/ServicesCards";
import { Faq, FaqItem } from "../../../components/Faq";
import { Button } from "../../../components/Button";
import { Steps, StepsItem } from "../../../components/Steps";

export const Services = () => {
  return (
    <>
      <section className="flex flex-col gap-16 my-20">
        <div className="flex items-center gap-6">
          <div className="w-[70px] h-[2px] bg-neutral-950"></div>
          <Title title={"Our Services"} />
        </div>
        <ServicesCards>
          <Cards
            title={"lighting design"}
            subtitle={
              "achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
            }
          />
          <Cards
            title={"lighting design"}
            subtitle={
              "achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
            }
          />
          <Cards
            title={"lighting design"}
            subtitle={
              "achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
            }
          />
        </ServicesCards>
      </section>
      <section className="flex gap-20 py-20">
        <img src="/image_3.png" alt="image" className="w-[660px]" />
        <div className="flex flex-col gap-16">
          <Title
            title={"Designing Your Dream With Blilliance"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere. Duis eget elementum lectus. Duis condimentum ultrices dictum. Mauris accumsan commodo rhoncus."
            }
          />
          <Faq>
            <FaqItem
              title={"Living Room Interior Design"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere."
              }
            />
            <FaqItem
              title={"Living Room Interior Design"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere."
              }
            />
            <FaqItem
              title={"Living Room Interior Design"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere."
              }
            />
          </Faq>
          <Button text={"Learn More"} />
        </div>
      </section>
      <section className="flex justify-between gap-36 my-20">
        <div className="flex flex-col gap-16">
          <Title title={"Designing Your Dream In Three Simple Steps"} />
          <Steps>
            <StepsItem
              number={"1"}
              title={"Start project"}
              description={
                "achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
              }
            />
            <StepsItem
              number={"2"}
              title={"Start project"}
              description={
                "achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
              }
            />
            <StepsItem
              number={"3"}
              title={"Start project"}
              description={
                "achive the perfect balance of ambient task, and accent desing for a funtional almosfere"
              }
            />
          </Steps>
        </div>
        <img src="/image_4.png" className="w-[765px]" />
      </section>
    </>
  );
};
