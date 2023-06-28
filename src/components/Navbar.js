import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "../../public/All-Texts/Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
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
    <header className="w-full px-32 py-8 font-medium flex items-center bg-dark/5 text-xl dark:bg-white/5 dark:text-white">
      <Logo mode = {mode}  />
      <nav className="absolute left-[65%]">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/blogs" title="Blogs" className="mx-4" />
      </nav>
      <nav className="absolute left-[89%]">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="hover:bg-gray-400/30 p-1 rounded-full flex items-center ml-4"
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
