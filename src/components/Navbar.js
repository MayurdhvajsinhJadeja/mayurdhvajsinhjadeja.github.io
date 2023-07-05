import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "../../public/All-Texts/Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  
  return (
    <Link href={href} className={`${className} relative group`} scroll={false}>
      {title}

      <span
        className={`
      h-[2px] inline-block bg-dark 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 dark:bg-white
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="backdrop-filter backdrop-blur-lg bg-opacity-30 w-full px-32 py-8 font-medium flex items-center sticky top-0 z-10 bg-white dark:text-light border-b border-black/75 dark:border-white/75 dark:bg-dark dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30">
      <Logo mode={mode} />
      <nav className="absolute left-[71%]">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/blogs" title="Blogs" className="mx-4" />
      </nav>
      <nav className="absolute left-[93%]">
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
      {/* <nav>
            <Link href="/" target={"_blank"}>Twitter</Link>
            <Link href="/" target={"_blank"}>Instagram</Link>
            <Link href="/" target={"_blank"}>LinkedIn</Link>
            <Link href="/" target={"_blank"}>Github</Link>
        </nav> */}
    </header>
  );
};

export default Navbar;


