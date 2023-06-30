import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import llogo from "../../public/images/profile/logo-white.png";
import dlogo from "../../public/images/profile/logo-black.png";

const MotionLink = motion(Link);

const Logo = ({ mode }) => {
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

        {
          mode === "light"
          ? <div><Image src={llogo} width={25} alt="MJ" /></div>
          : <div><Image src={dlogo} width={25} alt="MJ" /></div>
        }
      </MotionLink>
    </div>
  );
};

export default Logo;
