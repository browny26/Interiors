import React from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex z-20 justify-between py-5">
      <h1 className="font-kansei text-[24px] items-center">C&L</h1>
      <ul className="list-none space-x-6 flex m-0 items-center">
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
      </ul>
      <Button text={"Sign Up"} size={"small"} />
    </nav>
  );
};
