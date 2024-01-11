import React from "react";
import { Instagram, Phone } from "lucide-react";
import EpdragoIcon from "../navbar/EpdragoIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[rgb(07,07,07)] mt-4">
      <div className="flex  items-center py-0 pt-4 justify-center flex-col ">
        <EpdragoIcon />
        <div className="flex mt-4 items-center">
          <div className=" flex py-3  ">
            <Instagram className="text-green-500" size={25} />
            <a
              href="https://www.instagram.com/axeel_dubin/"
              className=" pl-4 text-md tracking-wide text-[#AFA18F] font-semibold"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="h-8 w-[4px] bg-neutral-800 rounded-full mx-4"></div>
          <div className="flex py-3 ">
            <Phone className="text-green-500" size={25} />
            <a
              href="https://wa.me/message/VXF6JNGEW5FNP1"
              className=" pl-4 text-md tracking-wide text-[#AFA18F] font-semibold "
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="mt-4 py-0 px-24 text-center text-sm text-gray-500">
          Esta pagina pertenece a Epdrago
        </h1>
        <h2 className=" pb-4 px-24 text-center text-sm text-gray-500">
          Copywright 2024
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
