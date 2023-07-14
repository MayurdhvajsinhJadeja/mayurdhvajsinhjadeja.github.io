import React, { useState } from "react";
import {motion} from "framer-motion"
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "../../public/All-Texts/Icons";
import Image from "next/image";
import linkedInLogo from "../../public/images/svgs/linkedin.svg";
import GitHubInLogo from "../../public/images/svgs/logo-github.svg";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`} scroll={false}>
      {title}

      <span
        className={`
      h-[2px] inline-block xl:bg-dark  bg-light dark:bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 xl:dark:bg-white
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group`} scroll={false} onClick={handleClick}>
      {title}

      <span
        className={`
      h-[2px] inline-block xl:bg-dark  bg-light dark:bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 xl:dark:bg-white
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="backdrop-filter backdrop-blur xl bg-opacity-30 w-full px-32 py-8 font-medium flex items-center sticky top-0 z-10 bg-white dark:text-light border-b border-black/75 dark:border-white/75 dark:bg-dark dark:backdrop-filter dark:backdrop-blur xl dark:bg-opacity-30">
      <Logo mode={mode} />
      <nav className="absolute right-[7.5%] hidden xl:flex">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/blogs" title="Blogs" className="mx-4" />
      </nav>

     {
      isOpen ?
      <motion.div initial={{scale:0, opacity:0}}
      animate={{scale:1,opacity:1,x:60,transition:0.6}}>
      <nav className="bg-dark dark:bg-light text-light dark:text-dark rounded-lg backdrop-blur-md  px-28 mt-4 z-30 flex flex-col absolute top-[140px] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <CustomMobileLink href="/" title="Home" className="mt-4" toggle={handleClick} />
        <CustomMobileLink href="/about" title="About" className="mt-4" toggle={handleClick} />
        <CustomMobileLink href="/projects" title="Projects" className="mt-4" toggle={handleClick} />
        <CustomMobileLink href="/blogs" title="Blogs" className="my-4" toggle={handleClick} />
        
      </nav>
    </motion.div>
    : null
     }

      <nav className="absolute right-[5%]">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="hover:bg-gray-400/30 p-1 rounded-full flex items-center"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <nav className="flex flex-row dark:text-light text-dark">
            
        </nav>
      <button
        className="relative right-[-130%] flex-col justify-center items-center flex xl:hidden "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
    </header>
  );
};

export default Navbar;
