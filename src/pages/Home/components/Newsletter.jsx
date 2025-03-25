import React from "react";
import { Title } from "../../../components/Title";
import { NewsletterBox } from "../../../components/NewsletterBox";

export const Newsletter = () => {
  return (
    <section className="relative flex items-center justify-center mt-10 mb-20">
      <div className="max-w-[650px]">
        <Title
          centered={true}
          weight="bold"
          title={"Subscribe To Our Newsletter For Design Insights"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nulla eu auctor posuere."
          }
        />
      </div>
      <NewsletterBox />
    </section>
  );
};
