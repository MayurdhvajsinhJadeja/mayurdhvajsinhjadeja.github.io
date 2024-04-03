import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../public/images/profile/MayurdhvajProfile.png";
import Link from "next/link";
import { LinkArrow } from "../../public/All-Texts/Icons";
import TransitionEffect from "@/components/TransitionEffect";

const Home = () => {
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
      <main className="flex items-center text-dark w-full min-h-screen ">
        <Layout classname="pt-0">
          <div className="w-full items-center pt-0 pb-0 xl:flex">
            <div className="w-44 ml-[10%] xl:ml-5 h-44 flex justify-center align-middle items-center xl:w-60 xl:h-60 dark:border-white bg-zinc-500 border-dark rounded-full border-4">
              {/* <div className="w-full bg-white"></div> */}
              <Image
                priority
                src={profilePic}
                alt="Mayurdhvaj"
                // className=" w-11/12  height-11/12 shadow-2xl border-4 border-double border-dark rounded-full dark:border-white"
                className=" w-11/12  height-auto  rounded-full "
              />
            </div>
            <div
              id="hero"
              className="hero-section xl:w-4/5 mb-6 xl:ml-4 xl:mr-0"
            >
              <div className="w-[90%] ml-3 container">
                <h2 className="text-dark/75 dark:text-light/75 xl:text-6xl leading-normal xs:text-sm">
                  Hi, I&apos;m{" "}
                  <p className="dark:text-light text-dark font-bold">
                    Mayurdhvajsinh Jadeja
                  </p>
                  {/* {showMayurdhvaj ? (
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
                  ) : null} */}
                </h2>
                <h3
                  className={`text-dark/75 dark:text-light/75 ${
                    showWebDev ? "show" : ""
                  } xl:text-5xl xs:sm `}
                >
                  <div className="xl:flex">
                    <div>I&apos;m passionate&nbsp;</div>
                    <div>
                      about{" "}
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
                    </div>
                  </div>
                </h3>
                <div className="flex flex-col items-center mt-3 xl:flex-row xl:items-center xl:self-start">
                  <a
                    href="/MayurdhvajsinhJadeja.pdf"
                    target="_blank"
                    className="flex items-center justify-center  w-full xl:w-auto bg-dark text-light p-2 xl:px-6 rounded-lg text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
                  >
                    <p className="relative mr-6">Resume</p>
                    <LinkArrow className="absolute w-6 ml-20 " />
                  </a>

                  <a
                    href="mailto:mayurdhvajsinhjadeja123@gmail.com"
                    target="_blank"
                    className="flex items-center justify-center  w-full xl:w-auto mt-2 xl:mt-0 xl:mx-2 bg-light text-dark p-2 xl:px-10 rounded-lg text-lg font-semibold
                    hover:bg-dark hover:text-light border-2 border-solid border-dark hover:border-light
                    dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark hover:font-semibold dark:border-light dark:hover:border-dark"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default Home;
