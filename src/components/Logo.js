import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import llogo from "../../public/images/profile/logo-white.png";
import dlogo from "../../public/images/profile/logo-black.png";
import { use, useEffect, useState } from "react";

const MotionLink = motion(Link);

const Logo = ({mode}) => {
  // useEffect(() => {
  //   const userPref = window.localStorage.getItem("theme");
  //   const logo = window.document.getElementById("darklogo")
  //   if (userPref === "dark") {
  //     logo.remove();
  //   } else {
  //     document.documentElement.remove("darklogo");
  //   }
  // });
  // const [mode] = useThemeSwitcher();
  
  return (
    <div className="flex items-center absolute left-[5%]">
      <MotionLink
        href="/"
        className="w-10 h-10 bg-dark dark:bg-light flex items-center justify-center text-2xl font-bold rounded-full"
        whileHover={{
          scale: [1.1, 1.1, 1.1, 1.1],
          rotate: [0, -45, 45, 0],
          borderRadius: ["50%", "20%", "20%", "50%"],
          scale: 1.1,
        }}
      >
        {/* checking dark theme or light and accordingly showing logo */}



        {mode==='light' &&
        <div className="lightlogo dark:opacity-0">
        <Image src={llogo} width={25} alt="MJ" />
      </div>
        }
        {
          mode==='dark' &&
          <div id="darklogo">
          <Image src={dlogo} width={25} alt="MJ" />
        </div>
        }
        
      </MotionLink>
    </div>
  );
};

export default Logo;
