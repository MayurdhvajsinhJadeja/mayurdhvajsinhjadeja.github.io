import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
// import './hero.css';
import profilePic from "../../public/images/profile/MayurdhvajProfile.png";
import Link from "next/link";
import { LinkArrow } from "../../public/All-Texts/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showMayurdhvaj, setShowMayurdhvaj] = useState(false);
  const [showWebDev, setShowWebDev] = useState(false);
  const [cursorVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMayurdhvaj(true);
    }, 100); // Delay before showing "Mayurdhvaj"

    setTimeout(() => {
      setShowWebDev(true);
    }, 100); // Delay before showing "Web Development"

    return () => {
      setShowMayurdhvaj(false);
      setShowWebDev(false);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Mayurdhvaj</title>
        <meta name="description" content="portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout classname="pt-0">
          <div className="flex w-full items-center pt-0 pb-0">
            <div className=" flex justify-center align-middle items-center w-60 h-60 dark:border-white bg-zinc-500 border-dark rounded-full border-4">
              {/* <div className="w-full bg-white"></div> */}
              <Image
                priority
                src={profilePic}
                alt="Mayurdhvaj"
                // className=" w-11/12  height-11/12 shadow-2xl border-4 border-double border-dark rounded-full dark:border-white"
                className=" w-11/12  height-auto  rounded-full"
              />
            </div>
            <div id="hero" className="hero-section w-4/5 mb-6 ml-4 mr-0">
              <div className="container">
                <h2 className="text-dark/75 dark:text-light/75 text-6xl leading-normal">
                  Hi, I&apos;m{" "}
                  {showMayurdhvaj ? (
                    <TypeAnimation
                      sequence={["Mayurdhvajsinh Jadeja."]}
                      wrapper="span"
                      className="dark:text-light text-dark"
                      cursor={cursorVisible}
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    />
                  ) : null}
                </h2>
                <h3
                  className={`text-dark/75 dark:text-light/75 ${
                    showWebDev ? "show" : ""
                  } text-5xl`}
                >
                  I am passionate about{" "}
                  {showWebDev ? (
                    <TypeAnimation
                      sequence={[
                        "Data Science.",
                        1000,
                        "AI-ML.",
                        1000,
                        "WebDev.",
                        1000,
                      ]}
                      wrapper="span"
                      cursor={cursorVisible}
                      className="dark:text-light text-dark"
                      repeat={Infinity}
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    />
                  ) : null}
                </h3>
                <div className="flex items-center self-start mt-3">
                  <Link
                    href="/Resume-Mayurdhvajsinh-Jadeja.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark text-light p-1.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
                  >
                    Resume
                    <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href="mailto:mayurdhvajsinhjadeja123@gmail.com"
                    target={"_blank"}
                    className="flex items-center bg-light text-dark p-1.5 mx-2 px-10 rounded-lg text-lg font-semibold
                    hover:bg-dark hover:text-light border-2 border-solid border-dark hover:border-light
                    dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark dark:border-light dark:hover:border-dark"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      {/* <About />
      <Skills />
      <Education />
      <Experience /> */}
    </>
  );
}
