import React from "react";
import { Facebook, Instagram, Pinterest, Twitter } from "react-bootstrap-icons";
import { Title } from "./Title";

export const Footer = () => {
  return (
    <footer className="container mx-auto px-10 bg-green-950 text-white py-[100px] flex flex-col lg:flex-row items-center justify-between w-full">
      <div className="flex flex-col gap-5 max-w-[195px]">
        <Title title={"C&L"} header="h6" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex gap-3">
          <Instagram />
          <Twitter />
          <Facebook />
          <Pinterest />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Title title={"Pages"} header="h6" />
        <p>Home</p>
        <p>Services</p>
        <p>About</p>
      </div>
      <div className="flex flex-col gap-5">
        <Title title={"Pages"} header="h6" />
        <p>Home</p>
        <p>Services</p>
        <p>About</p>
      </div>
      <div className="flex flex-col gap-5">
        <Title title={"Policy"} header="h6" />
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
    </footer>
  );
};
