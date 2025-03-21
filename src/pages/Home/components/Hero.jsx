import React from "react";
import { Button } from "../../../components/Button";
import { Title } from "../../../components/Title";
import { Statistics } from "../../../components/Statistics";
import { ArrowDown } from "react-bootstrap-icons";
import { Blob } from "../../../components/Blob";

export const Hero = () => {
  return (
    <section
      style={{ height: "calc(100dvh - 80.8px)" }}
      className="relative flex justify-between items-center"
    >
      <Blob position="-left-64" />
      <div className="z-20 flex flex-col gap-10 flex-1">
        <Title
          title={"Innate Interiors"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere. Duis eget elementum lectus. Duis condimentum ultrices dictum. Mauris accumsan commodo rhoncus. "
          }
          header="h1"
          weight="medium"
        />
        <Button text={"Start Project"} />
        <div className="flex gap-16">
          <Statistics number={"400"} description={"Projects Complited"} />
          <Statistics number={"600"} description={"Projects Complited"} />
          <Statistics number={"100"} description={"Projects Complited"} />
        </div>
      </div>
      <div className="flex-1 relative h-full">
        <img
          src="/image_1.png"
          alt="img"
          className="w-fit h-fit absolute z-20 -right-10 top-0 scale-75"
        />
        <div className="h-[200px] w-[200px] border border-green-600 absolute z-10 bottom-64 left-44"></div>
        <img
          src="/image_2.png"
          alt="img"
          className="w-fit h-fit absolute z-20 right-10 bottom-5 scale-75"
        />
        <div className="h-[152px] w-[152px] bg-green-600 absolute z-30 right-0 bottom-10 flex items-center justify-center">
          <ArrowDown className="text-bg h-[45px] w-[45px]" />
        </div>
      </div>
    </section>
  );
};
