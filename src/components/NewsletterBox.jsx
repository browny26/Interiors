import React from "react";
import { Button } from "./Button";

export const NewsletterBox = () => {
  return (
    <div className="absolute -bottom-28 bg-green-50 drop-shadow-lg flex justify-between items-center py-3 px-6 w-[1000px]">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button text={"Sign Up"} size="small" />
    </div>
  );
};
