/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="text-white w-full mb-[100px] md:mb-5 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today let&apos;s discuss how i can achieve your goal
        </p>
        <a href="mailto:timmy12lau@gmail.com">
          <MagicButton
            title="Let's get in touch "
            icon={<FaLocationArrow />}
            position="right"
            otherClasses=""
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col  justify-between items-center">
        <p className="md:text-base text-sm font-light">
          Copyright © 2024 Timmy Lau
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center 
              backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300
              mt-5"
            >
              <img src={profile.img} alt={"socials"} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
