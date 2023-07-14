import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "../../public/All-Texts/Icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:border-light"
    >
      <div className="w-full h-full z-0 bg-light p-5 dark:bg-dark py-4 flex items-center justify-center dark:text-light ">
        <span className="w-1/3">{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <nav className="flex flex-row">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.6 }}
          >
            <Link
              href="https://www.linkedin.com/in/mayurdhvajsinh-jadeja/"
              className="xl:mx-20 mx-10 "
              target={"_blank"}
            >
              <LinkedInIcon />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", bounce: 0.6 }}
          >
            <Link
              href="https://github.com/MayurdhvajsinhJadeja"
              className="xl:mx-20 mx-10"
              target={"_blank"}
            >
              <GithubIcon />
            </Link>
          </motion.div>
        </nav>
        <div className="w-1/3 justify-center items-center xl:pl-52 pl-4">
          Build by{" "}
          <Link
            href="/"
            className="w-1/3underline underline-offset-3 text-sky-600"
          >
            Mayurdhvaj
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
