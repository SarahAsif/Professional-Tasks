import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="pt-10 bg-zinc-800 ">
      <nav className=" text-white px-40  ">
        <div className="flex flex-row items-center py-9">
          <div className="mb-2 sm:mb-0 uppercase ">
            <a
              href="/home"
              className="  text-3xl no-underline text-white hover:text-blue-dark mr-8 font-bold"
            >
              Iminn
            </a>
          </div>
          <div className="grid grid-flow-col gap-9 list font-semibold">
            <a
              href="/one"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Home
            </a>
            <a
              href="/two"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              About
            </a>
            <a
              href="/three"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Blog
            </a>
            <a
              href="/three"
              className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
